function showImg()
    {
        const SpareParts= document.getElementById("SpareParts").value;
        

        if(SpareParts == "1"){
            document.getElementById("img1").style.display='block'
            document.getElementById("img2").style.display='none'
            document.getElementById("img3").style.display='none'
        }
         else if(SpareParts == "2"){
            document.getElementById("img1").style.display='none'
            document.getElementById("img2").style.display='block'
            document.getElementById("img3").style.display='none'
        }
        else if(SpareParts == "3"){
            document.getElementById("img1").style.display='none'
            document.getElementById("img2").style.display='none'
            document.getElementById("img3").style.display='block'
        }
       
        else{
            document.getElementById("img1").style.display='none'
        }

    }