/***
 *      @author Victor Chimenti, MSCS-SE '20
 *      @file image-panel-text-html.js
 *      @see Seattle University School of Law Image Panel Content Type
 *      law/text/html
 *
 *      Document will write once when the page loads
 *
 *      @version 1.13
 */




try {

    /***
     *  Assign local variables from the content type's fields
     * 
     * */
    var itemName = com.terminalfour.publish.utils.BrokerUtils.processT4Tags(dbStatement, publishCache, section, content, language, isPreview, "<t4 type='content' name='Name' output='normal' modifiers='striptags,htmlentities' />");
    var itemTitle = com.terminalfour.publish.utils.BrokerUtils.processT4Tags(dbStatement, publishCache, section, content, language, isPreview, "<t4 type='content' name='Title' output='normal' display_field='value' />");
    var textLocation = com.terminalfour.publish.utils.BrokerUtils.processT4Tags(dbStatement, publishCache, section, content, language, isPreview, "<t4 type='content' name='Location of text' output='normal' display_field='value' />");
    var description = com.terminalfour.publish.utils.BrokerUtils.processT4Tags(dbStatement, publishCache, section, content, language, isPreview, "<t4 type='content' name='Description' output='normal' display_field='value' />");
    var backgroundImage = com.terminalfour.publish.utils.BrokerUtils.processT4Tags(dbStatement, publishCache, section, content, language, isPreview, "<t4 type='content' name='Image' output='normal' formatter='path/*' />");
    // var imageHeight = com.terminalfour.publish.utils.BrokerUtils.processT4Tags(dbStatement, publishCache, section, content, language, isPreview, "<t4 type='content' name='Height of image' output='normal' modifiers='striptags,htmlentities' />");
    var borderColor= com.terminalfour.publish.utils.BrokerUtils.processT4Tags(dbStatement, publishCache, section, content, language, isPreview, "<t4 type='content' name='Border Color' output='normal' display_field='value' />");
    var btnOneText = com.terminalfour.publish.utils.BrokerUtils.processT4Tags(dbStatement, publishCache, section, content, language, isPreview, "<t4 type='content' name='Button 1 text' output='normal' modifiers='striptags,htmlentities' />");
    var btnOneLink = com.terminalfour.publish.utils.BrokerUtils.processT4Tags(dbStatement, publishCache, section, content, language, isPreview, "<t4 type='content' name='Button 1 link' output='linkurl' modifiers='nav_sections' />");
    var btnOneTitle = com.terminalfour.publish.utils.BrokerUtils.processT4Tags(dbStatement, publishCache, section, content, language, isPreview, "<t4 type='content' name='Button 1 link' output='linktext' modifiers='nav_sections' />");
    var btnTwoText = com.terminalfour.publish.utils.BrokerUtils.processT4Tags(dbStatement, publishCache, section, content, language, isPreview, "<t4 type='content' name='Button 2 text' output='normal' modifiers='striptags,htmlentities' />");
    var btnTwoLink = com.terminalfour.publish.utils.BrokerUtils.processT4Tags(dbStatement, publishCache, section, content, language, isPreview, "<t4 type='content' name='Button 2 link' output='linkurl' modifiers='nav_sections' />");
    var btnTwoTitle = com.terminalfour.publish.utils.BrokerUtils.processT4Tags(dbStatement, publishCache, section, content, language, isPreview, "<t4 type='content' name='Button 2 link' output='linktext' modifiers='nav_sections' />");
    var anchorTag = com.terminalfour.publish.utils.BrokerUtils.processT4Tags(dbStatement, publishCache, section, content, language, isPreview, "<t4 type='meta' meta='html_anchor' />");
    var contentID = com.terminalfour.publish.utils.BrokerUtils.processT4Tags(dbStatement, publishCache, section, content, language, isPreview, "<t4 type='meta' meta='content_id' />");




    /***
     *  Declare/Assign local variables with default formatting
     * 
     * */
    var titleString = '<h2 id="label' + contentID + '">' + itemTitle + '</h2>';
    var openStandardContent = '<div class="panelText"><div class="standardContent">';
    var closeStandardContent = '</div></div>'
    var openPanelInner = '<div class="panelInner col-xs-12 col-sm-12 col-md-6 col-lg-4 ' + textLocation + '">';
    var closePanelInner = '</div>';
    var openPanelContainer = '<div class="panelFlexContainer ' + textLocation + '">'
    var closePanelContainer = '</div>';
    var imageString = '<img class="card-image-top my-3" src="' + backgroundImage +'">';
    var openOverlay = '<div class="card-img-overlay card-inverse my-3">';
    var closeOverlay = '</div>';
    var openBlock = '<div class="card-block">';
    var closeBlock = '</div>';
    var btnOneString = '<li><a href="' + btnOneLink + '" class="card-link h-100" title="' + btnOneTitle + '"><span class="d-inline-block align-middle">' + btnOneText + '</span></a></li>';
    var btnTwoString = '<li><a href="' + btnTwoLink + '" class="card-link h-100" title="' + btnTwoTitle + '"><span class="d-inline-block align-middle">' + btnTwoText + '</span></a></li>';
    var openLinksList = '<ul class="panelLinks flex-md-nowrap">';
    var closeLinksList = '</ul>';
    var descriptionString = '<div class="card-text">' + description + '</div>';
    var beginningHTML = '<div class="panelWrapper contentItem noGap container-fluid px-0" title="' + itemTitle + '" id="id<t4 type=\'meta\' meta=\'content_id\' data-position-default="Main" data-position-selected="Main" role="presentation" aria-labelledby="label<t4 type=\'meta\' meta=\'content_id\' />"/>"><div class="col-12 card border-0 my-3">';
    var endingHTML = '</div></div>';




    /***
     *  Write the document once
     * 
     * */
    document.write(com.terminalfour.publish.utils.BrokerUtils.processT4Tags(dbStatement, publishCache, section, content, language, isPreview, beginningHTML));
    document.write(com.terminalfour.publish.utils.BrokerUtils.processT4Tags(dbStatement, publishCache, section, content, language, isPreview, anchorTag));
    document.write(com.terminalfour.publish.utils.BrokerUtils.processT4Tags(dbStatement, publishCache, section, content, language, isPreview, imageString));
    document.write(com.terminalfour.publish.utils.BrokerUtils.processT4Tags(dbStatement, publishCache, section, content, language, isPreview, openOverlay));
    document.write(com.terminalfour.publish.utils.BrokerUtils.processT4Tags(dbStatement, publishCache, section, content, language, isPreview, openBlock));
    document.write(com.terminalfour.publish.utils.BrokerUtils.processT4Tags(dbStatement, publishCache, section, content, language, isPreview, openPanelContainer));
    document.write(com.terminalfour.publish.utils.BrokerUtils.processT4Tags(dbStatement, publishCache, section, content, language, isPreview, openPanelInner));
    document.write(com.terminalfour.publish.utils.BrokerUtils.processT4Tags(dbStatement, publishCache, section, content, language, isPreview, openStandardContent));
    document.write(com.terminalfour.publish.utils.BrokerUtils.processT4Tags(dbStatement, publishCache, section, content, language, isPreview, titleString));
    document.write(com.terminalfour.publish.utils.BrokerUtils.processT4Tags(dbStatement, publishCache, section, content, language, isPreview, descriptionString));
    document.write(com.terminalfour.publish.utils.BrokerUtils.processT4Tags(dbStatement, publishCache, section, content, language, isPreview, openLinksList));
    document.write(com.terminalfour.publish.utils.BrokerUtils.processT4Tags(dbStatement, publishCache, section, content, language, isPreview, btnOneString));
    document.write(com.terminalfour.publish.utils.BrokerUtils.processT4Tags(dbStatement, publishCache, section, content, language, isPreview, btnTwoString));
    document.write(com.terminalfour.publish.utils.BrokerUtils.processT4Tags(dbStatement, publishCache, section, content, language, isPreview, closeLinksList));
    document.write(com.terminalfour.publish.utils.BrokerUtils.processT4Tags(dbStatement, publishCache, section, content, language, isPreview, closeStandardContent));
    document.write(com.terminalfour.publish.utils.BrokerUtils.processT4Tags(dbStatement, publishCache, section, content, language, isPreview, closePanelInner));
    document.write(com.terminalfour.publish.utils.BrokerUtils.processT4Tags(dbStatement, publishCache, section, content, language, isPreview, closePanelContainer));
    document.write(com.terminalfour.publish.utils.BrokerUtils.processT4Tags(dbStatement, publishCache, section, content, language, isPreview, closeBlock));
    document.write(com.terminalfour.publish.utils.BrokerUtils.processT4Tags(dbStatement, publishCache, section, content, language, isPreview, closeOverlay));
    document.write(com.terminalfour.publish.utils.BrokerUtils.processT4Tags(dbStatement, publishCache, section, content, language, isPreview, endingHTML));




} catch (err) {
    document.write(err.message);
}
