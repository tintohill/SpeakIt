/*
 * SpeakIt GUI
 *
 * This file contains code that displays Grafical User Interface
 *
 * @package		SpeakIt
 * @category	GUI
 * @author		Trajche Petrov a.k.a SkechBoy
 * @link		https://github.com/skechboy/SpeakIt
 
 * -----------------------------------------------------------------------------
 *  Get selected text don't work on iframes and some ssl encrypted pages
 *  depends' on level of encryption of page certificate...
 *  Sorry for that but again is Google's fault, damn Chrome is the safest
 *  browser ever build :) 
 * -----------------------------------------------------------------------------
*/
(function()
{
    doc = document.location.href;
    selection = window.getSelection();
    
    if(doc.search(/docs.google.com/i) != -1) // if Google Doc's
    {
        selection = document.getElementById('kix-appview');
        if(selection != null) selection = selection.innerText.split(' ').join(' ').substr(17);
    }
    if(selection != null && selection != '')
    {
        //console.log(selection);
        chrome.extension.sendRequest({"text": selection.toString()});   
    }
})();