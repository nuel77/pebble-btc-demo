     const global_var = {
        token: "",
        pebblePublicKey: "",
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
        footer: 'Get Ready for the Fastest DLT in the World',
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
        let arr = Swal.fire({

            allowOutsideClick: false,
            allowEscapeKey: false,
            grow: 'fullscreen',
            confirmButtonText: 'Submit',
            title: "",

            html:
                '<div class="label"><span title="What do u wanna write here?"> Enter Public Key</span></div>' +
                '<form><input required="required" id="swal-input1" class="swal2-input" style="width: 40%"> <br>',


            footer: '<button type="button" id="newKey" class="swal2-confirm swal2-styled" onclick="generatePublicKey()" style="display: inline-block; border-left-color: rgb(48, 133, 214); border-right-color: rgb(48, 133, 214); background-color:#5cb85c;">Generate New Public Key</button>',

            preConfirm: () => {
                global_var.userPublicKey = document.getElementById('swal-input1').value;
                // generateMultisignAddress();
                return {

                    networkType: netType,
                    publicKey: document.getElementById('swal-input1').value,
                }
            }

        });

        return arr
    }).then((res) => {
        console.log(res)
        console.log(global_var)
    })

    function generateMultisignAddress() {

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
                    });
            });
    }
