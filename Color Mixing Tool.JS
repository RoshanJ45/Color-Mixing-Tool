        function mixColors() {
            const color1 = document.getElementById('color1').value;
            const color2 = document.getElementById('color2').value;


            const resultColor = mixHexColors(color1, color2);
            document.getElementById('resultBox').style.backgroundColor = resultColor;
        }


        function mixHexColors(color1, color2) {
            const r = Math.round((parseInt(color1.substring(1, 3), 16) + parseInt(color2.substring(1, 3), 16)) / 2);
            const g = Math.round((parseInt(color1.substring(3, 5), 16) + parseInt(color2.substring(3, 5), 16)) / 2);
            const b = Math.round((parseInt(color1.substring(5, 7), 16) + parseInt(color2.substring(5, 7), 16)) / 2);
            return `rgb(${r}, ${g}, ${b})`;
        }
    