const global_var = {
    token: "",
    passPhrase: "",
    withdrawAddress: "",
    api_endpoint: "https://api.blockcypher.com/v1/btc/",
};
fetch('/getToken')
    .then(res => res.text()
    ).then((res) => {
    global_var.token = res
});
fetch('/getPebblePublicKey')
    .then(res => res.text())
    .then(res => {
        //console.log(res)
        global_var.pebblePublicKey = res
    });

// console.log(global_var)


Swal.fire({
    grow: 'fullscreen',
    title: 'Welcome To Pebble',
    allowOutsideClick: false,
    allowEscapeKey: false,
    text: 'Select Network',
    footer: 'Get ready for the fastest DLT in the World',
    imageUrl: "pebble-icon.svg",
    input: 'select',
    inputOptions: {
        main: 'Bitcoin Main Network',
        test3: 'Bitcoin Test Network 3',
    },
    confirmButtonText: 'Proceed',
    inputValidator: (value) => {
        return new Promise((resolve) => {
            resolve()
        })
    }
}).then((res) => {
    let netType = res.value;
    global_var.networkType = netType;
    //console.log(global_var);
    Swal.fire({

        allowOutsideClick: false,
        allowEscapeKey: false,
        grow: 'fullscreen',
        confirmButtonText: 'Submit',
        title: "",

        html:
            '<video id="preview" width="320" height="240"></video>' +
            '<div class="label"><span title="What do u wanna write here?"><h5>Enter Passphrase:</h5> </span></div>' +
            '<form><input required="required" id="swal-input1" class="swal2-input" style="width: 40%"> <br>' +
            '<div class="label"><span title="What do u wanna write here?"><h5>Enter Withdraw Address:</h5> </span></div>' +
            '<form><input required="required" id="swal-input2" class="swal2-input" style="width: 40%"> <br>' +
            '<button type="button" id="scan" onclick="scanner()" class="swal2-styled swal2-cancel">Scan Withdraw Address</button>',


        preConfirm: () => {
            global_var.passPhrase = document.getElementById('swal-input1').value;
            global_var.withdrawAddress = document.getElementById('swal-input2').value;
            //generateMultisignAddress();
            if (!(global_var.withdrawAddress)) {
                Swal.showValidationMessage(
                    "Withdraw Address cannot be left blank"
                )
            } else if (!(global_var.passPhrase)) {
                Swal.showValidationMessage(
                    "Passphrase cannot be left blank"
                )
            } else {
                return {
                    networkType: netType,
                    publicKey: document.getElementById('swal-input1').value,
                }
            }
        },
    });


}).then((res) => {

    console.log(global_var)

});


function scanner() {
    let scanner = new Instascan.Scanner({video: document.getElementById('preview')});
    scanner.addListener('scan', function (content) {

        content = content.replace("bitcoin:", "");
        document.getElementById('swal-input2').value = content;
        scanner.stop();
        document.getElementById("preview").style.display = "none";
        scanner.stop();


    });
    Instascan.Camera.getCameras().then(function (cameras) {
        if (cameras.length > 0) {
            scanner.start(cameras[0]);
        } else {
            console.error('No cameras found.');
        }
    }).catch(function (e) {
        console.error(e);
    });

}


function generateMultisignAddress() {
    swal.fire({
        title: 'Loading',
        html: 'Please Wait',
        onBeforeOpen: () => {
            Swal.showLoading()
        }
    });
    const data = {
        "pubkeys": [
            global_var.pebblePublicKey,
            global_var.userPublicKey

        ],
        "script_type": "multisig-2-of-2"
    };

    $.post(global_var.api_endpoint + global_var.networkType + '/addrs?token=' + global_var.token, JSON.stringify(data))
        .then(function (d) {
            console.log(d.address);
            document.getElementById("userAddress").innerHTML = d.address;
            $.get(global_var.api_endpoint + global_var.networkType + '/addrs/' + d.address + '/balance?token=' + global_var.token)
                .then(function (d) {
                    document.getElementById("unConfirmedBalance").innerHTML = '$' + d.unconfirmed_balance;
                    document.getElementById("balance").innerHTML = '$ ' + d.balance;
                    swal.close()
                });
        });
}