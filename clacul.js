  let btn = document.querySelector("#btn")
            let parent = document.querySelector("#parent")
            let smb = document.querySelector("#smb")
            let scrn = document.querySelector("#scrn")
            let butn = document.querySelectorAll("button")
            butn.forEach(function (e) {
                e.onclick = function () {
                    if (e.value != "=" && e.value != "--") {
                        if (scrn.value == "0" && e.value == "0") {
                            scrn.value = "0"
                            return
                        }
                        scrn.value += e.value
                    }

                    if (e.value == "--") {
                        let r = scrn.value.split("")
                        r.pop()
                        scrn.value = r.join("")
                    }
                    if (e.value == "=") {
                        scrn.value = eval(scrn.value)
                    }
                    if (e.value == "C") {
                        scrn.value = ""
                        return
                    }

                }
            }
            )
            let isDark = false;
            smb.onclick = function () {
                if (!isDark) {
                    smb.style.background = "white";
                    smb.style.color = "black";
                    smb.style.border = " 1px solid rgb(230, 149, 11)";
                    smb.innerHTML = "mode claire"
                    parent.style.background = "black";
                    btn.style.boxShadow = "10px 10px  10px  white";
                    btn.style.border = " solid  rgb(189, 189, 189)";
                    btn.style.background = "black";
                    btnmod.style.background = " rgb(225, 140, 21)"
                    btnC.style.background = " rgb(225, 140, 21)"
                    btnflech.style.background = " rgb(225, 140, 21)"
                    btnmod.style.background = " rgb(225, 140, 21)"
                    btnplus.style.background = " rgb(225, 140, 21)"
                    btnmoin.style.background = " rgb(225, 140, 21)"
                    btnfois.style.background = " rgb(225, 140, 21)"
                    egala.style.background = " rgb(225, 140, 21)"
                    btnsur.style.background = " rgb(225, 140, 21)"
                    smb.innerHTML = "mode claire";
                    isDark = true;
                } else {
                    smb.style.background = "black";
                    smb.style.color = "white";
                    smb.style.border = " 1px solid rgb(230, 149, 11)";
                    smb.innerHTML = "mode claire"
                    parent.style.background = "white";
                    btn.style.boxShadow = "10px 10px  10px  white";
                    btn.style.border = " solid  white";
                    btn.style.background = "#f9c65c";
                    btnmod.style.background = " #a8d8ff"
                    btnC.style.background = "  #a8d8ff"
                    btnflech.style.background = " #a8d8ff"
                    btnmod.style.background = "  #a8d8ff"
                    btnplus.style.background = " #a8d8ff"
                    btnmoin.style.background = " #a8d8ff"
                    btnfois.style.background = "  #a8d8ff"
                    egala.style.background = "  #4dd0e1"
                    btnsur.style.background = " #a8d8ff"
                    smb.innerHTML = "mode somber";
                   
                    isDark = false;
                }
            }