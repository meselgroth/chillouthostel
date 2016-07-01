/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


function formatFecha(fecha){
    var dia,mes,anio,resultado;
    
    dia = fecha.getDate();
    if(dia < 10){
        dia = '0'+dia;
    }
    
    mes = fecha.getMonth() + 1;
    if(mes < 10){
        mes = '0'+mes;
    }
    anio = fecha.getFullYear();
    resultado = anio+'-'+mes+'-'+dia;
    
    return resultado;
}


function IsValidDate(strDate, strDelimiter, iDayPosInArray, iMonthPosInArray, iYearPosInArray) {
    var strDateArr; //a string array to hold constituents day, month, and year components
    var dtDate; //our internal converted date
    var iDay, iMonth, iYear;


    //sanity check 
    //no integer checks are performed on day, month, and year tokens as parsing them below will result in NaN if they're invalid
    if (null == strDate || typeof strDate != "string")
        return null;

    //defaults
    strDelimiter = strDelimiter || "/";
    iDayPosInArray = undefined == iDayPosInArray ? 0 : iDayPosInArray;
    iMonthPosInArray = undefined == iMonthPosInArray ? 1 : iMonthPosInArray;
    iYearPosInArray = undefined == iYearPosInArray ? 2 : iYearPosInArray;

    strDateArr = strDate.split(strDelimiter);

    iDay = parseInt(strDateArr[iDayPosInArray],10);
    iMonth = parseInt(strDateArr[iMonthPosInArray],10) - 1; // Note: months are 0-based
    iYear = parseInt(strDateArr[iYearPosInArray],10);

    dtDate = new Date(
        iYear,
        iMonth, // Note: months are 0-based
        iDay);

    return (!isNaN(dtDate) && dtDate.getFullYear() == iYear && dtDate.getMonth() == iMonth && dtDate.getDate() == iDay) ? dtDate : null; // Note: months are 0-based
}