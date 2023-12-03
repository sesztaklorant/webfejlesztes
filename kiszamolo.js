function kiszamolo(){

    let lov = 0;
    let ber = 0;
    let ren = 0;
    let bor = 0;
    let ossz = 0;
    let valid = true;

    //LOVAGLÁS

    let alapar = 5000;
    if(document.getElementById("idlovaglas").checked){
        //HIBA KIJAVÍTÁSA UTÁN STYLE MÓDOSÍTÁS VISSZA
        document.getElementById("idlovaglasmark").style.border = "2px solid #dda15e";
        document.getElementById("idlovaglaslabel").style.color = "#fefae0";
        let lovaglasorak = document.getElementById("idlovaglasorak").value;
        //HIBAKERESÉS
        if (lovaglasorak == ""){
            valid = false;
            document.getElementById("idlovaglasorak").style.border = "3px solid red";
        }
        else{
            //HIBA KIJAVÍTÁSA UTÁN STYLE MÓDOSÍTÁS VISSZA
            document.getElementById("idlovaglasorak").style.border = "2px solid #dda15e";
        }
        let szorzo = 0;
        if(document.getElementById("idkezdo").checked){
            szorzo = 1;
        }
        else if(document.getElementById("idkozephalado").checked){
            szorzo = 0.95;
        }
        else if(document.getElementById("idhalado").checked){
            szorzo = 0.9;
        }
        //HIBAKERESÉS
        if (szorzo == 0){
            valid = false;
            document.getElementById("idradio1label").style.color = "red";
            document.getElementById("idradio1check").style.border = "2px solid red";
            document.getElementById("idradio1label2").style.color = "red";
            document.getElementById("idradio1check2").style.border = "2px solid red";
            document.getElementById("idradio1label3").style.color = "red";
            document.getElementById("idradio1check3").style.border = "2px solid red";

        }
        else{
            //HIBA KIJAVÍTÁSA UTÁN STYLE MÓDOSÍTÁS VISSZA
            document.getElementById("idradio1label").style.color = "#fefae0";
            document.getElementById("idradio1check").style.border = "2px solid #dda15e";
            document.getElementById("idradio1label2").style.color = "#fefae0";
            document.getElementById("idradio1check2").style.border = "2px solid #dda15e";
            document.getElementById("idradio1label3").style.color = "#fefae0";
            document.getElementById("idradio1check3").style.border = "2px solid #dda15e";
        }
        let berletszorzo = 0
        let berlet = document.getElementById("idberlet").selectedIndex;
        switch(berlet){
            case 0: berletszorzo = 1;
            break;
            case 1: berletszorzo = 3.2;
            break;
            case 2: berletszorzo = 6.4;
            break;
            case 3: berletszorzo = 8;
            break;
            case 4: berletszorzo = 24;
            break;
            case 5: berletszorzo = 1.4;
            break;
            case 6: berletszorzo = 14;
        }
        lov = alapar * lovaglasorak * szorzo * berletszorzo;
    }
    //HA NINCS KIPIPÁLVA A NAGY CHECKBOX, DE VAN ADAT
    else{
        let lovaglasorak = document.getElementById("idlovaglasorak").value;
        let vaneadat = false;
        if(document.getElementById("idkezdo").checked){
            vaneadat = true;
        }
        else if(document.getElementById("idkozephalado").checked){
            vaneadat = true;
        }
        else if(document.getElementById("idhalado").checked){
            vaneadat = true;
        }
        if(lovaglasorak != "" || (vaneadat)){
            valid = false;
            document.getElementById("idlovaglasmark").style.border = "2px solid red";
            document.getElementById("idlovaglaslabel").style.color = "red";
        }
    }

    //BÉRTARTÁS

    let beralapar = 45000;
    if(document.getElementById("idbertartas").checked){
        //HIBA KIJAVÍTÁSA UTÁN STYLE MÓDOSÍTÁS VISSZA
        document.getElementById("idbertartasmark").style.border = "2px solid #dda15e";
        document.getElementById("idbertartaslabel").style.color = "#fefae0";
        let berlovakszama = document.getElementById("idlovakszama").value;
        //HIBAKERESÉS
        if (berlovakszama == ""){
            valid = false;
            document.getElementById("idlovakszama").style.border = "3px solid red";
        }
        else{
            //HIBA KIJAVÍTÁSA UTÁN STYLE MÓDOSÍTÁS VISSZA
            document.getElementById("idlovakszama").style.border = "2px solid #dda15e";
        }
        let today = new Date();
        let maev = today.getFullYear();
        let mahonap = today.getMonth() + 1;
        let manap = today.getDate();
        let extrahonap = 1;
        if(manap >= 25){
            extrahonap = 0;
        }
        let honapok = String(document.getElementById("idbertartasideje").value);
        let datumeloszto = honapok.split('-')
        let adottev = Number(datumeloszto[0]);
        let adotthonap = Number(datumeloszto[1]);
        let honapszamlalo = 0;
        //HIBAKERESÉS
        if(adottev == maev && adotthonap > mahonap || (adottev > maev && adottev < 2100) && adottev > maev){
            let szamolosev = (adottev - maev) * 12;
            let szamoloshonap = (adotthonap - mahonap);
            honapszamlalo = szamolosev + szamoloshonap + extrahonap
            document.getElementById("idbertartasideje").style.border = "2px solid #dda15e";
            document.getElementById("idbertartasideje").style.color = "black";
        }
        else{
            document.getElementById("idbertartasideje").style.border = "3px solid red";
            document.getElementById("idbertartasideje").style.color = "red";
            valid = false;
        }
        let taroloszamlalo = 0;
        let fedettszamlalo = 0;
        let patkolasszamlalo = 0;
        if(document.getElementById("idtarolo").checked){
            taroloszamlalo = 2000 * honapszamlalo * berlovakszama;
        }
        if(document.getElementById("idfedett").checked){
            fedettszamlalo = 8000 * honapszamlalo * berlovakszama;
        }
        if(document.getElementById("idpatko").checked){
            patkolasszamlalo = 60000 * (Math.ceil(honapszamlalo / 12)) * berlovakszama;
        }
        ber = beralapar * berlovakszama * honapszamlalo + taroloszamlalo + fedettszamlalo + patkolasszamlalo;
    }
    //HA NINCS KIPIPÁLVA A NAGY CHECKBOX, DE VAN ADAT
    else{
        let berbeadottlovakszama = document.getElementById("idlovakszama").value;
        let kivalasztottdatum = document.getElementById("idbertartasideje").value;
        if(berbeadottlovakszama != "" || kivalasztottdatum != ""){
            valid = false;
            document.getElementById("idbertartasmark").style.border = "2px solid red";
            document.getElementById("idbertartaslabel").style.color = "red";
        }
    }

    //RENDEZVÉNYEK

    if(document.getElementById("idrendezveny").checked){
        //HIBA KIJAVÍTÁSA UTÁN STYLE MÓDOSÍTÁS VISSZA
        document.getElementById("idrendezvenyekmark").style.border = "2px solid #dda15e";
        document.getElementById("idrendezvenyeklabel").style.color = "#fefae0";
        let letszamszorzo = 0
        if(document.getElementById("ideskuvo").checked){
            letszamszorzo = 7000;
        }
        else if(document.getElementById("idszuletesnap").checked){
            letszamszorzo = 4000;
        }
        else if(document.getElementById("idballagas").checked){
            letszamszorzo = 5000;
        }
        else if(document.getElementById("idcsapatepito").checked){
            letszamszorzo = 3000;
        }
        //HIBAKERESÉS
        if (letszamszorzo == 0){
            valid = false;
            document.getElementById("idradio2label").style.color = "red";
            document.getElementById("idradio2check").style.border = "2px solid red";
            document.getElementById("idradio2check2").style.border = "2px solid red";
            document.getElementById("idradio2label2").style.color = "red";
            document.getElementById("idradio2label3").style.color = "red";
            document.getElementById("idradio2check3").style.border = "2px solid red";
            document.getElementById("idradio2label4").style.color = "red";
            document.getElementById("idradio2check4").style.border = "2px solid red";
        }
        else{
            //HIBA KIJAVÍTÁSA UTÁN STYLE MÓDOSÍTÁS VISSZA
            document.getElementById("idradio2label").style.color = "#fefae0";
            document.getElementById("idradio2check").style.border = "2px solid #dda15e";
            document.getElementById("idradio2label2").style.color = "#fefae0";
            document.getElementById("idradio2check2").style.border = "2px solid #dda15e";
            document.getElementById("idradio2label3").style.color = "#fefae0";
            document.getElementById("idradio2check3").style.border = "2px solid #dda15e";
            document.getElementById("idradio2label4").style.color = "#fefae0";
            document.getElementById("idradio2check4").style.border = "2px solid #dda15e";
        }
        let rendezvenyletszam = document.getElementById("idresztvevok").value;
        //HIBAKERESÉS
        if (rendezvenyletszam == 0){
            valid = false;
            document.getElementById("idresztvevok").style.border = "3px solid red";
        }
        else{
            //HIBA KIJAVÍTÁSA UTÁN STYLE MÓDOSÍTÁS VISSZA
            document.getElementById("idresztvevok").style.border = "2px solid #dda15e";
        }
        ren = rendezvenyletszam * letszamszorzo;
    }
    else{
        let rendezvenymegadottletszama = document.getElementById("idresztvevok").value;
        let vaneadat2 = false;
        if(document.getElementById("ideskuvo").checked){
            vaneadat2 = true;
        }
        else if(document.getElementById("idszuletesnap").checked){
            vaneadat2 = true;
        }
        else if(document.getElementById("idballagas").checked){
            vaneadat2 = true;
        }
        else if(document.getElementById("idcsapatepito").checked){
            vaneadat2 = true;
        }
        if(rendezvenymegadottletszama != "" || (vaneadat2)){
            valid = false;
            document.getElementById("idrendezvenyekmark").style.border = "2px solid red";
            document.getElementById("idrendezvenyeklabel").style.color = "red";
        }
    }

    //BOROK

    if(document.getElementById("idborok").checked){
        //HIBA KIJAVÍTÁSA UTÁN STYLE MÓDOSÍTÁS VISSZA
        document.getElementById("idborokmark").style.border = "2px solid #dda15e";
        document.getElementById("idboroklabel").style.color = "#fefae0";

        //SZAKASZHATÁR 1
        document.getElementById("idszm").style.border = "2px solid #dda15e";
        document.getElementById("idbox1mark").style.border = "2px solid #dda15e";
        document.getElementById("idbox1label").style.color = "#fefae0";
        let sz = 0;
        if(document.getElementById("idszurkebarat").checked){
            let szmm = document.getElementById("idszm").value;
            if(szmm == ""){
                valid = false;
                document.getElementById("idszm").style.border = "3px solid red";
            }
            let szmm2 = document.getElementById("idcs1").value;
            sz = 2000 * szmm * szmm2;
        }
        else{
            if(document.getElementById("idszm").value != ""){
                valid = false;
                document.getElementById("idbox1mark").style.border = "2px solid red";
                document.getElementById("idbox1label").style.color = "red";
            }
        }
        //SZAKASZHATÁR 2
        document.getElementById("idlm").style.border = "2px solid #dda15e";
        document.getElementById("idbox2mark").style.border = "2px solid #dda15e";
        document.getElementById("idbox2label").style.color = "#fefae0";
        let l = 0;
        if(document.getElementById("idleanyka").checked){
            let lmm = document.getElementById("idlm").value;
            if(lmm == ""){
                valid = false;
                document.getElementById("idlm").style.border = "3px solid red";
            }
            let lmm2 = document.getElementById("idcs2").value;
            l = 2400 * lmm * lmm2;
        }
        else{
            if(document.getElementById("idlm").value != ""){
                valid = false;
                document.getElementById("idbox2mark").style.border = "2px solid red";
                document.getElementById("idbox2label").style.color = "red";
            }
        }
        //SZAKASZHATÁR 3
        document.getElementById("idtm").style.border = "2px solid #dda15e";
        document.getElementById("idbox3mark").style.border = "2px solid #dda15e";
        document.getElementById("idbox3label").style.color = "#fefae0";
        let t = 0;
        if(document.getElementById("idtramini").checked){
            let tmm = document.getElementById("idtm").value;
            if(tmm == ""){
                valid = false;
                document.getElementById("idtm").style.border = "3px solid red";
            }
            let tmm2 = document.getElementById("idcs3").value;
            t = 3000 * tmm * tmm2;
        }
        else{
            if(document.getElementById("idtm").value != ""){
                valid = false;
                document.getElementById("idbox3mark").style.border = "2px solid red";
                document.getElementById("idbox3label").style.color = "red";
            }
        }
        //SZAKASZHATÁR 4
        document.getElementById("idmm").style.border = "2px solid #dda15e";
        document.getElementById("idbox4mark").style.border = "2px solid #dda15e";
        document.getElementById("idbox4label").style.color = "#fefae0";
        let m = 0;
        if(document.getElementById("idmerlot").checked){
            let mmm = document.getElementById("idmm").value;
            if(mmm == ""){
                valid = false;
                document.getElementById("idmm").style.border = "3px solid red";
            }
            let mmm2 = document.getElementById("idcs4").value;
            m = 2200 * mmm * mmm2;
        }
        else{
            if(document.getElementById("idmm").value != ""){
                valid = false;
                document.getElementById("idbox4mark").style.border = "2px solid red";
                document.getElementById("idbox4label").style.color = "red";
            }
        }
        //SZAKASZHATÁR 5
        document.getElementById("idborkletsz").style.border = "2px solid #dda15e";
        document.getElementById("idbox5mark").style.border = "2px solid #dda15e";
        document.getElementById("idbox5label").style.color = "#fefae0";
        let bork = 0;
        if(document.getElementById("idborkostolo").checked){
            let borkletszm = document.getElementById("idborkletsz").value;
            if(borkletszm == ""){
                valid = false;
                document.getElementById("idborkletsz").style.border = "3px solid red";
            }
            bork = 3500 * borkletszm;
        }
        else{
            if(document.getElementById("idborkletsz").value != ""){
                valid = false;
                document.getElementById("idbox5mark").style.border = "2px solid red";
                document.getElementById("idbox5label").style.color = "red";
            }
        }

        //TELI BOROK KIJELÖLÉS DE ÜRES ADATOK ESETÉN KELL
        let borm1 = document.getElementById("idszm").value;
        let borm2 = document.getElementById("idlm").value;
        let borm3 = document.getElementById("idtm").value;
        let borm4 = document.getElementById("idmm").value;
        let bork1 = document.getElementById("idborkletsz").value;
        let kisegito = borm1 + borm2 + borm3 + borm4 + bork1;
        if(kisegito == "" && borm1 == "" && !document.getElementById("idszurkebarat").checked){
            valid = false;
            document.getElementById("idbox1mark").style.border = "2px solid red";
            document.getElementById("idbox1label").style.color = "red";
        }
        if(kisegito == "" && borm2 == "" && !document.getElementById("idleanyka").checked){
            valid = false;
            document.getElementById("idbox2mark").style.border = "2px solid red";
            document.getElementById("idbox2label").style.color = "red";
        }
        if(kisegito == "" && borm3 == "" && !document.getElementById("idtramini").checked){
            valid = false;
            document.getElementById("idbox3mark").style.border = "2px solid red";
            document.getElementById("idbox3label").style.color = "red";
        }
        if(kisegito == "" && borm4 == "" && !document.getElementById("idmerlot").checked){
            valid = false;
            document.getElementById("idbox4mark").style.border = "2px solid red";
            document.getElementById("idbox4label").style.color = "red";
        }
        if(kisegito == "" && bork1 == "" && !document.getElementById("idborkostolo").checked){
            valid = false;
            document.getElementById("idbox5mark").style.border = "2px solid red";
            document.getElementById("idbox5label").style.color = "red";
        }

        //ADATOK ÖSSZEADÁSA
        bor = sz + l + t + m + bork;
    }
    else{
        let borm1 = document.getElementById("idszm").value;
        let borm2 = document.getElementById("idlm").value;
        let borm3 = document.getElementById("idtm").value;
        let borm4 = document.getElementById("idmm").value;
        let bork1 = document.getElementById("idborkletsz").value;
        let kisegito = borm1 + borm2 + borm3 + borm4 + bork1;
        let bevanjelolve = false;
        if(document.getElementById("idszurkebarat").checked || document.getElementById("idleanyka").checked || document.getElementById("idtramini").checked || document.getElementById("idmerlot").checked || document.getElementById("idborkostolo").checked){
            bevanjelolve = true;
        }
        if(kisegito != "" || (bevanjelolve)){
            valid = false;
            document.getElementById("idborokmark").style.border = "2px solid red";
            document.getElementById("idboroklabel").style.color = "red";
        }
    }

    //KIIRATÁS

    ossz = lov + ber + ren + bor;

    if(valid){
        if(ossz == 0){
            milesz = confirm("Nem adott meg értéket, vagy nem jelölt ki kívánt kategóriát! Folytatja?");
            if(milesz){
                document.getElementById("idlovaglasmark").style.border = "2px solid #dda15e";
                document.getElementById("idlovaglaslabel").style.color = "#fefae0";
                document.getElementById("idlovaglasorak").style.border = "2px solid #dda15e";
                document.getElementById("idradio1label").style.color = "#fefae0";
                document.getElementById("idradio1check").style.border = "2px solid #dda15e";
                document.getElementById("idradio1label2").style.color = "#fefae0";
                document.getElementById("idradio1check2").style.border = "2px solid #dda15e";
                document.getElementById("idradio1label3").style.color = "#fefae0";
                document.getElementById("idradio1check3").style.border = "2px solid #dda15e";
                document.getElementById("idbertartasmark").style.border = "2px solid #dda15e";
                document.getElementById("idbertartaslabel").style.color = "#fefae0";
                document.getElementById("idlovakszama").style.border = "2px solid #dda15e";
                document.getElementById("idbertartasideje").style.border = "2px solid #dda15e";
                document.getElementById("idbertartasideje").style.color = "black";
                document.getElementById("idrendezvenyekmark").style.border = "2px solid #dda15e";
                document.getElementById("idrendezvenyeklabel").style.color = "#fefae0";
                document.getElementById("idradio2label").style.color = "#fefae0";
                document.getElementById("idradio2check").style.border = "2px solid #dda15e";
                document.getElementById("idradio2label2").style.color = "#fefae0";
                document.getElementById("idradio2check2").style.border = "2px solid #dda15e";
                document.getElementById("idradio2label3").style.color = "#fefae0";
                document.getElementById("idradio2check3").style.border = "2px solid #dda15e";        
                document.getElementById("idradio2label4").style.color = "#fefae0";
                document.getElementById("idradio2check4").style.border = "2px solid #dda15e";
                document.getElementById("idresztvevok").style.border = "2px solid #dda15e";
                document.getElementById("idborokmark").style.border = "2px solid #dda15e";
                document.getElementById("idboroklabel").style.color = "#fefae0";
                document.getElementById("idszm").style.border = "2px solid #dda15e";
                document.getElementById("idbox1mark").style.border = "2px solid #dda15e";
                document.getElementById("idbox1label").style.color = "#fefae0";
                document.getElementById("idlm").style.border = "2px solid #dda15e";
                document.getElementById("idbox2mark").style.border = "2px solid #dda15e";
                document.getElementById("idbox2label").style.color = "#fefae0";
                document.getElementById("idtm").style.border = "2px solid #dda15e";
                document.getElementById("idbox3mark").style.border = "2px solid #dda15e";
                document.getElementById("idbox3label").style.color = "#fefae0";
                document.getElementById("idmm").style.border = "2px solid #dda15e";
                document.getElementById("idbox4mark").style.border = "2px solid #dda15e";
                document.getElementById("idbox4label").style.color = "#fefae0";
                document.getElementById("idborkletsz").style.border = "2px solid #dda15e";
                document.getElementById("idbox5mark").style.border = "2px solid #dda15e";
                document.getElementById("idbox5label").style.color = "#fefae0";

                document.getElementById("idkiszamolooo").style.color = "#fefae0";
                document.getElementById("idkiszamolooo").innerHTML = (`A megadott értékek alapján a költségek: <br/><br/> <strong/>• Lovaglás: ${lov} Forint <br/> • Bértartás: ${ber} Forint <br/> • Rendezvények: ${ren} Forint <br/> • Borok: ${bor} Forint <br/> • Összesen: ${ossz} Forint</strong/>`);
            }
            else{
                return;
            }
        }
        else{
            document.getElementById("idkiszamolooo").style.color = "#fefae0";
            document.getElementById("idkiszamolooo").innerHTML = (`A megadott értékek alapján a költségek: <br/><br/> <strong/>• Lovaglás: ${lov} Forint <br/> • Bértartás: ${ber} Forint <br/> • Rendezvények: ${ren} Forint <br/> • Borok: ${bor} Forint <br/> • Összesen: ${ossz} Forint</strong/>`);
        }
    }
    else{
        document.getElementById("idkiszamolooo").style.color = "red";
        document.getElementById("idkiszamolooo").innerHTML = ("<strong/>A megadott értékek hiányosak vagy nem megfelelőek!</strong/>");
    }
    
}

document.getElementById("idelkuld").addEventListener("click", kiszamolo);
document.getElementById("idujra").addEventListener("click", function(){
    document.getElementById("idkiszamolooo").style.color = "#fefae0"; 
    document.getElementById("idkiszamolooo").innerHTML = ("<strong/>A kiszámolt értékek itt fognak megjelenni!</strong/>");

    document.getElementById("idlovaglasmark").style.border = "2px solid #dda15e";
    document.getElementById("idlovaglaslabel").style.color = "#fefae0";
    document.getElementById("idlovaglasorak").style.border = "2px solid #dda15e";
    document.getElementById("idradio1label").style.color = "#fefae0";
    document.getElementById("idradio1check").style.border = "2px solid #dda15e";
    document.getElementById("idradio1label2").style.color = "#fefae0";
    document.getElementById("idradio1check2").style.border = "2px solid #dda15e";
    document.getElementById("idradio1label3").style.color = "#fefae0";
    document.getElementById("idradio1check3").style.border = "2px solid #dda15e";
    document.getElementById("idbertartasmark").style.border = "2px solid #dda15e";
    document.getElementById("idbertartaslabel").style.color = "#fefae0";
    document.getElementById("idlovakszama").style.border = "2px solid #dda15e";
    document.getElementById("idbertartasideje").style.border = "2px solid #dda15e";
    document.getElementById("idbertartasideje").style.color = "black";
    document.getElementById("idrendezvenyekmark").style.border = "2px solid #dda15e";
    document.getElementById("idrendezvenyeklabel").style.color = "#fefae0";
    document.getElementById("idradio2label").style.color = "#fefae0";
    document.getElementById("idradio2check").style.border = "2px solid #dda15e";
    document.getElementById("idradio2label2").style.color = "#fefae0";
    document.getElementById("idradio2check2").style.border = "2px solid #dda15e";
    document.getElementById("idradio2label3").style.color = "#fefae0";
    document.getElementById("idradio2check3").style.border = "2px solid #dda15e";        
    document.getElementById("idradio2label4").style.color = "#fefae0";
    document.getElementById("idradio2check4").style.border = "2px solid #dda15e";
    document.getElementById("idresztvevok").style.border = "2px solid #dda15e";
    document.getElementById("idborokmark").style.border = "2px solid #dda15e";
    document.getElementById("idboroklabel").style.color = "#fefae0";
    document.getElementById("idszm").style.border = "2px solid #dda15e";
    document.getElementById("idbox1mark").style.border = "2px solid #dda15e";
    document.getElementById("idbox1label").style.color = "#fefae0";
    document.getElementById("idlm").style.border = "2px solid #dda15e";
    document.getElementById("idbox2mark").style.border = "2px solid #dda15e";
    document.getElementById("idbox2label").style.color = "#fefae0";
    document.getElementById("idtm").style.border = "2px solid #dda15e";
    document.getElementById("idbox3mark").style.border = "2px solid #dda15e";
    document.getElementById("idbox3label").style.color = "#fefae0";
    document.getElementById("idmm").style.border = "2px solid #dda15e";
    document.getElementById("idbox4mark").style.border = "2px solid #dda15e";
    document.getElementById("idbox4label").style.color = "#fefae0";
    document.getElementById("idborkletsz").style.border = "2px solid #dda15e";
    document.getElementById("idbox5mark").style.border = "2px solid #dda15e";
    document.getElementById("idbox5label").style.color = "#fefae0";
});