// Listener to catch the event raised by the webpage button
document.addEventListener("EID_EVENT", function (data) {
    // send message to background process to read emirates ID and send back the data
    chrome.runtime.sendMessage({type:"student"}, function (response) {
    });
});

document.addEventListener("EID_EVENT_GUARD1", function (data) {
    // send message to background process to read emirates ID and send back the data
    chrome.runtime.sendMessage({type:"guard1"}, function (response) {
    });
});

document.addEventListener("EID_EVENT_GUARD2", function (data) {
    // send message to background process to read emirates ID and send back the data
    chrome.runtime.sendMessage({type:"guard2"}, function (response) {
    });
});



// document.addEventListener("EID_EVENT_GUARD1", function (data) {
//     // send message to background process to read emirates ID and send back the data
//     chrome.runtime.sendMessage("test", function (response) {
//     });
// });

// Listener to catch the data coming from the background process
chrome.extension.onMessage.addListener(function (msg, sender, sendResponse) {

	if(msg.action == 'EID_DATA_GUARD1'){
		try{
			var json = $.parseJSON(msg.response);
			$(json).each(function(i,val){
				$.each(val, function(key, value){
					if(key == 'Name')
						$("#applicant_applicant_guardians_attributes_0_first_name").val(value);
					if(key == 'NameAr')
						$("#applicant_applicant_guardians_attributes_0_last_name").val(value);
					
					if(key == 'Nationality' & value != null)
						$("#applicant_applicant_addl_values_attributes_3_option").val(value);
					else if(key == 'NationalityID')
						$("#applicant_applicant_addl_values_attributes_3_option").val(value);

					if(key == 'Occupation')
						$("#applicant_applicant_guardians_attributes_0_occupation").val(value);
					if(key == 'Area')
						$("#applicant_applicant_addl_values_attributes_5_option").val(value);
					if (key == 'Mobile')
						$("#applicant_applicant_guardians_attributes_0_mobile_phone").val(value);
					if (key == 'Email')
						$("#applicant_applicant_guardians_attributes_0_email").val(value);

                });
            });
        }
        catch (e) {
            var error = "error" + e;
        }
    }


else if(msg.action == 'EID_DATA_GUARD2'){
		try{
			var json = $.parseJSON(msg.response);
			$(json).each(function(i,val){
				$.each(val, function(key, value){
					if(key == 'Name')
						$("#applicant_applicant_addl_values_attributes_7_option").val(value);
					if(key == 'NameAr')
						$("#applicant_applicant_addl_values_attributes_9_option").val(value);
					
					if(key == 'Nationality' & value != null)
						$("#applicant_applicant_addl_values_attributes_11_option").val(value);
					else if(key == 'NationalityID')
						$("#applicant_applicant_addl_values_attributes_11_option").val(value);

					if(key == 'Occupation')
						$("#applicant_applicant_addl_values_attributes_12_option").val(value);
					if(key == 'Area')
						$("#applicant_applicant_addl_values_attributes_17_option").val(value);
					if (key == 'Mobile')
						$("#applicant_applicant_addl_values_attributes_14_option").val(value);
					if (key == 'Email')
						$("#applicant_applicant_addl_values_attributes_16_option").val(value);

                });
            });
        }
        catch (e) {
            var error = "error" + e;
        }
    }



    else if (msg.action == 'EID_DATA') {
        //Parse the data and fill the form accordingly
        try {
            var json = $.parseJSON(msg.response);
            $(json).each(function (i, val) {
                $.each(val, function (key, value) {
                if (key == 'EIDNumber')
                        $("#applicant_applicant_additional_details_attributes_0_additional_info").val(value);
                    if (key == 'NameAr')
                        $("#applicant_first_name").val(value);
                    if (key == 'Name')
                        $("#applicant_last_name").val(value);
                    if (key == 'PassportNumber')
                        $("#applicant_applicant_additional_details_attributes_1_additional_info").val(value);
		   			if (key == 'Area')
                        $("#applicant_address_line1").val(value);
                    if (key == 'Mobile')
                        $("#applicant_phone2").val(value);
                    if (key == 'Email')
                        $("#applicant_email").val(value);
                    if (key == 'DOB')
                    {
                        var date = value.split('-');
                        var newDate = date[2] + '-' + date[1] + '-' + date [0];
                        $(".calendar_label").val(newDate);
                    }
                    if (key == 'Sex')
                    {
                    	if (value == 'M')
                    		$('input:radio[id=applicant_gender_m]').prop('checked',true)
                    	else if (value == 'F')
                    		$('input:radio[id=applicant_gender_f]').prop('checked',true)
                    }


                    if(key == "NationalityID"){

                	switch(value){
                		 case 'AFG':
						$('#applicant_nationality_id').val(1).change();
						break; 
						 case 'ALB':
						$('#applicant_nationality_id').val(2).change();
						break; 
						 case 'DZA':
						$('#applicant_nationality_id').val(3).change();
						break; 
						 case 'AND':
						$('#applicant_nationality_id').val(4).change();
						break; 
						 case 'AGO':
						$('#applicant_nationality_id').val(5).change();
						break; 
						 case 'ATG':
						$('#applicant_nationality_id').val(6).change();
						break; 
						 case 'ARG':
						$('#applicant_nationality_id').val(7).change();
						break; 
						 case 'ARM':
						$('#applicant_nationality_id').val(8).change();
						break; 
						 case 'AUS':
						$('#applicant_nationality_id').val(9).change();
						break; 
						 case 'AUT':
						$('#applicant_nationality_id').val(10).change();
						break; 
						 case 'AZE':
						$('#applicant_nationality_id').val(11).change();
						break; 
						 case 'BHS':
						$('#applicant_nationality_id').val(12).change();
						break; 
						 case 'BHR':
						$('#applicant_nationality_id').val(13).change();
						break; 
						 case 'BGD':
						$('#applicant_nationality_id').val(14).change();
						break; 
						 case 'BRB':
						$('#applicant_nationality_id').val(15).change();
						break; 
						 case 'BLR':
						$('#applicant_nationality_id').val(16).change();
						break; 
						 case 'BEL':
						$('#applicant_nationality_id').val(17).change();
						break; 
						 case 'BLZ':
						$('#applicant_nationality_id').val(18).change();
						break; 
						 case 'BEN':
						$('#applicant_nationality_id').val(19).change();
						break; 
						 case 'BTN':
						$('#applicant_nationality_id').val(20).change();
						break; 
						 case 'BOL':
						$('#applicant_nationality_id').val(21).change();
						break; 
						 case 'BIH':
						$('#applicant_nationality_id').val(22).change();
						break; 
						 case 'BWA':
						$('#applicant_nationality_id').val(23).change();
						break; 
						 case 'BRA':
						$('#applicant_nationality_id').val(24).change();
						break; 
						 case 'BRN':
						$('#applicant_nationality_id').val(25).change();
						break; 
						 case 'BGR':
						$('#applicant_nationality_id').val(26).change();
						break; 
						 case 'BFA':
						$('#applicant_nationality_id').val(27).change();
						break; 
						 case 'MMR':
						$('#applicant_nationality_id').val(28).change();
						break; 
						 case 'BDI':
						$('#applicant_nationality_id').val(29).change();
						break; 
						 case 'TCA':
						$('#applicant_nationality_id').val(30).change();
						break; 
						 case 'KHM':
						$('#applicant_nationality_id').val(31).change();
						break; 
						 case 'CMR':
						$('#applicant_nationality_id').val(32).change();
						break; 
						 case 'CAN':
						$('#applicant_nationality_id').val(33).change();
						break; 
						 case 'CPV':
						$('#applicant_nationality_id').val(34).change();
						break; 
						 case 'CAF':
						$('#applicant_nationality_id').val(35).change();
						break; 
						 case 'TCD':
						$('#applicant_nationality_id').val(36).change();
						break; 
						 case 'CHL':
						$('#applicant_nationality_id').val(37).change();
						break; 
						 case 'CHN':
						$('#applicant_nationality_id').val(38).change();
						break; 
						 case 'COL':
						$('#applicant_nationality_id').val(39).change();
						break; 
						 case 'COM':
						$('#applicant_nationality_id').val(40).change();
						break; 
						 case 'COK':
						$('#applicant_nationality_id').val(43).change();
						break; 
						 case 'CRI':
						$('#applicant_nationality_id').val(44).change();
						break; 
						 case 'HRV':
						$('#applicant_nationality_id').val(45).change();
						break; 
						 case 'CUB':
						$('#applicant_nationality_id').val(46).change();
						break; 
						 case 'CYP':
						$('#applicant_nationality_id').val(47).change();
						break; 
						 case 'CZE':
						$('#applicant_nationality_id').val(48).change();
						break; 
						 case 'CIV':
						$('#applicant_nationality_id').val(49).change();
						break; 
						 case 'PRK':
						$('#applicant_nationality_id').val(50).change();
						break; 
						 case 'COD':
						$('#applicant_nationality_id').val(51).change();
						break; 
						 case 'DNK':
						$('#applicant_nationality_id').val(52).change();
						break; 
						 case 'DJI':
						$('#applicant_nationality_id').val(53).change();
						break; 
						 case 'DMA':
						$('#applicant_nationality_id').val(54).change();
						break; 
						 case 'DOM':
						$('#applicant_nationality_id').val(55).change();
						break; 
						 case 'ECU':
						$('#applicant_nationality_id').val(57).change();
						break; 
						 case 'EGY':
						$('#applicant_nationality_id').val(58).change();
						break; 
						 case 'SLV':
						$('#applicant_nationality_id').val(59).change();
						break; 
						 case 'GNQ':
						$('#applicant_nationality_id').val(60).change();
						break; 
						 case 'ERI':
						$('#applicant_nationality_id').val(61).change();
						break; 
						 case 'EST':
						$('#applicant_nationality_id').val(62).change();
						break; 
						 case 'ETH':
						$('#applicant_nationality_id').val(63).change();
						break; 
						 case 'KNA':
						$('#applicant_nationality_id').val(64).change();
						break; 
						 case 'FJI':
						$('#applicant_nationality_id').val(65).change();
						break; 
						 case 'FIN':
						$('#applicant_nationality_id').val(66).change();
						break; 
						 case 'FRA':
						$('#applicant_nationality_id').val(67).change();
						break; 
						 case 'GAB':
						$('#applicant_nationality_id').val(68).change();
						break; 
						 case 'GMB':
						$('#applicant_nationality_id').val(69).change();
						break; 
						 case 'GEO':
						$('#applicant_nationality_id').val(70).change();
						break; 
						 case 'DEU':
						$('#applicant_nationality_id').val(71).change();
						break; 
						 case 'GHA':
						$('#applicant_nationality_id').val(72).change();
						break; 
						 case 'GRC':
						$('#applicant_nationality_id').val(73).change();
						break; 
						 case 'GRD':
						$('#applicant_nationality_id').val(74).change();
						break; 
						 case 'GTM':
						$('#applicant_nationality_id').val(75).change();
						break; 
						 case 'GIN':
						$('#applicant_nationality_id').val(76).change();
						break; 
						 case 'GNB':
						$('#applicant_nationality_id').val(77).change();
						break; 
						 case 'GUY':
						$('#applicant_nationality_id').val(78).change();
						break; 
						 case 'HTI':
						$('#applicant_nationality_id').val(79).change();
						break; 
						 case 'HND':
						$('#applicant_nationality_id').val(80).change();
						break; 
						 case 'HUN':
						$('#applicant_nationality_id').val(81).change();
						break; 
						 case 'ISL':
						$('#applicant_nationality_id').val(82).change();
						break; 
						 case 'IND':
						$('#applicant_nationality_id').val(83).change();
						break; 
						 case 'IDN':
						$('#applicant_nationality_id').val(84).change();
						break; 
						 case 'IRN':
						$('#applicant_nationality_id').val(85).change();
						break; 
						 case 'IRQ':
						$('#applicant_nationality_id').val(86).change();
						break; 
						 case 'IRL':
						$('#applicant_nationality_id').val(87).change();
						break; 
						 case 'ISR':
						$('#applicant_nationality_id').val(88).change();
						break; 
						 case 'ITA':
						$('#applicant_nationality_id').val(89).change();
						break; 
						 case 'JAM':
						$('#applicant_nationality_id').val(91).change();
						break; 
						 case 'JPN':
						$('#applicant_nationality_id').val(92).change();
						break; 
						 case 'JOR':
						$('#applicant_nationality_id').val(93).change();
						break; 
						 case 'KAZ':
						$('#applicant_nationality_id').val(94).change();
						break; 
						 case 'KEN':
						$('#applicant_nationality_id').val(95).change();
						break; 
						 case 'KIR':
						$('#applicant_nationality_id').val(96).change();
						break; 
						 case 'KOR':
						$('#applicant_nationality_id').val(98).change();
						break; 
						 case 'KWT':
						$('#applicant_nationality_id').val(100).change();
						break; 
						 case 'KGZ':
						$('#applicant_nationality_id').val(101).change();
						break; 
						 case 'LAO':
						$('#applicant_nationality_id').val(102).change();
						break; 
						 case 'LVA':
						$('#applicant_nationality_id').val(103).change();
						break; 
						 case 'LBN':
						$('#applicant_nationality_id').val(104).change();
						break; 
						 case 'LSO':
						$('#applicant_nationality_id').val(105).change();
						break; 
						 case 'LBR':
						$('#applicant_nationality_id').val(106).change();
						break; 
						 case 'LBY':
						$('#applicant_nationality_id').val(107).change();
						break; 
						 case 'LIE':
						$('#applicant_nationality_id').val(108).change();
						break; 
						 case 'LTU':
						$('#applicant_nationality_id').val(109).change();
						break; 
						 case 'LUX':
						$('#applicant_nationality_id').val(110).change();
						break; 
						 case 'MKD':
						$('#applicant_nationality_id').val(111).change();
						break; 
						 case 'MDG':
						$('#applicant_nationality_id').val(112).change();
						break; 
						 case 'MWI':
						$('#applicant_nationality_id').val(113).change();
						break; 
						 case 'MYS':
						$('#applicant_nationality_id').val(114).change();
						break; 
						 case 'MDV':
						$('#applicant_nationality_id').val(115).change();
						break; 
						 case 'MLI':
						$('#applicant_nationality_id').val(116).change();
						break; 
						 case 'MLT':
						$('#applicant_nationality_id').val(117).change();
						break; 
						 case 'MHL':
						$('#applicant_nationality_id').val(118).change();
						break; 
						 case 'MRT':
						$('#applicant_nationality_id').val(119).change();
						break; 
						 case 'MUS':
						$('#applicant_nationality_id').val(120).change();
						break; 
						 case 'MEX':
						$('#applicant_nationality_id').val(121).change();
						break; 
						 case 'FSM':
						$('#applicant_nationality_id').val(122).change();
						break; 
						 case 'MDA':
						$('#applicant_nationality_id').val(123).change();
						break; 
						 case 'MCO':
						$('#applicant_nationality_id').val(124).change();
						break; 
						 case 'MNG':
						$('#applicant_nationality_id').val(125).change();
						break; 
						 case 'MNE':
						$('#applicant_nationality_id').val(126).change();
						break; 
						 case 'MAR':
						$('#applicant_nationality_id').val(127).change();
						break; 
						 case 'MOZ':
						$('#applicant_nationality_id').val(128).change();
						break; 
						 case 'AZE':
						$('#applicant_nationality_id').val(130).change();
						break; 
						 case 'NAM':
						$('#applicant_nationality_id').val(131).change();
						break; 
						 case 'NRU':
						$('#applicant_nationality_id').val(132).change();
						break; 
						 case 'NPL':
						$('#applicant_nationality_id').val(133).change();
						break; 
						 case 'BES':
						$('#applicant_nationality_id').val(134).change();
						break; 
						 case 'NZL':
						$('#applicant_nationality_id').val(135).change();
						break; 
						 case 'NIC':
						$('#applicant_nationality_id').val(136).change();
						break; 
						 case 'NER':
						$('#applicant_nationality_id').val(137).change();
						break; 
						 case 'NGA':
						$('#applicant_nationality_id').val(138).change();
						break; 
						 case 'NOR':
						$('#applicant_nationality_id').val(139).change();
						break; 
						 case 'OMN':
						$('#applicant_nationality_id').val(140).change();
						break; 
						 case 'PAK':
						$('#applicant_nationality_id').val(141).change();
						break; 
						 case 'PLW':
						$('#applicant_nationality_id').val(142).change();
						break; 
						 case 'PSE':
						$('#applicant_nationality_id').val(143).change();
						break; 
						 case 'PAN':
						$('#applicant_nationality_id').val(144).change();
						break; 
						 case 'PNG':
						$('#applicant_nationality_id').val(145).change();
						break; 
						 case 'PRY':
						$('#applicant_nationality_id').val(146).change();
						break; 
						 case 'PER':
						$('#applicant_nationality_id').val(147).change();
						break; 
						 case 'PHL':
						$('#applicant_nationality_id').val(148).change();
						break; 
						 case 'POL':
						$('#applicant_nationality_id').val(149).change();
						break; 
						 case 'PRT':
						$('#applicant_nationality_id').val(150).change();
						break; 
						 case 'QAT':
						$('#applicant_nationality_id').val(151).change();
						break; 
						 case 'COG':
						$('#applicant_nationality_id').val(153).change();
						break; 
						 case 'ROU':
						$('#applicant_nationality_id').val(154).change();
						break; 
						 case 'RUS':
						$('#applicant_nationality_id').val(155).change();
						break; 
						 case 'RWA':
						$('#applicant_nationality_id').val(156).change();
						break; 
						 case 'ESH':
						$('#applicant_nationality_id').val(157).change();
						break; 
						 case 'LCA':
						$('#applicant_nationality_id').val(158).change();
						break; 
						 case 'VCT':
						$('#applicant_nationality_id').val(159).change();
						break; 
						 case 'WSM':
						$('#applicant_nationality_id').val(160).change();
						break; 
						 case 'SMR':
						$('#applicant_nationality_id').val(161).change();
						break; 
						 case 'STP':
						$('#applicant_nationality_id').val(162).change();
						break; 
						 case 'SAU':
						$('#applicant_nationality_id').val(163).change();
						break; 
						 case 'SEN':
						$('#applicant_nationality_id').val(164).change();
						break; 
						 case 'SRB':
						$('#applicant_nationality_id').val(165).change();
						break; 
						 case 'SYC':
						$('#applicant_nationality_id').val(166).change();
						break; 
						 case 'SLE':
						$('#applicant_nationality_id').val(167).change();
						break; 
						 case 'SGP':
						$('#applicant_nationality_id').val(168).change();
						break; 
						 case 'SVK':
						$('#applicant_nationality_id').val(169).change();
						break; 
						 case 'SVN':
						$('#applicant_nationality_id').val(170).change();
						break; 
						 case 'SLB':
						$('#applicant_nationality_id').val(171).change();
						break; 
						 case 'SOM':
						$('#applicant_nationality_id').val(172).change();
						break; 
						 case 'ZAF':
						$('#applicant_nationality_id').val(173).change();
						break; 
						 case 'ESP':
						$('#applicant_nationality_id').val(174).change();
						break; 
						 case 'LKA':
						$('#applicant_nationality_id').val(175).change();
						break; 
						 case 'SDN':
						$('#applicant_nationality_id').val(178).change();
						break; 
						 case 'SSD':
						$('#applicant_nationality_id').val(179).change();
						break; 
						 case 'SUR':
						$('#applicant_nationality_id').val(180).change();
						break; 
						 case 'SWZ':
						$('#applicant_nationality_id').val(181).change();
						break; 
						 case 'SWE':
						$('#applicant_nationality_id').val(182).change();
						break; 
						 case 'CHE':
						$('#applicant_nationality_id').val(183).change();
						break; 
						 case 'SYR':
						$('#applicant_nationality_id').val(184).change();
						break; 
						 case 'TWN':
						$('#applicant_nationality_id').val(185).change();
						break; 
						 case 'TJK':
						$('#applicant_nationality_id').val(186).change();
						break; 
						 case 'TZA':
						$('#applicant_nationality_id').val(187).change();
						break; 
						 case 'THA':
						$('#applicant_nationality_id').val(188).change();
						break; 
						 case 'TLS':
						$('#applicant_nationality_id').val(189).change();
						break; 
						 case 'TGO':
						$('#applicant_nationality_id').val(190).change();
						break; 
						 case 'TON':
						$('#applicant_nationality_id').val(191).change();
						break; 
						 case 'TTO':
						$('#applicant_nationality_id').val(193).change();
						break; 
						 case 'TUN':
						$('#applicant_nationality_id').val(194).change();
						break; 
						 case 'TUR':
						$('#applicant_nationality_id').val(195).change();
						break; 
						 case 'TKM':
						$('#applicant_nationality_id').val(196).change();
						break; 
						 case 'TUV':
						$('#applicant_nationality_id').val(198).change();
						break; 
						 case 'UGA':
						$('#applicant_nationality_id').val(199).change();
						break; 
						 case 'UKR':
						$('#applicant_nationality_id').val(200).change();
						break; 
						 case 'ARE':
						$('#applicant_nationality_id').val(201).change();
						break; 
						 case 'GBR':
						$('#applicant_nationality_id').val(202).change();
						break; 
						 case 'USA':
						$('#applicant_nationality_id').val(203).change();
						break; 
						 case 'URY':
						$('#applicant_nationality_id').val(204).change();
						break; 
						 case 'UZB':
						$('#applicant_nationality_id').val(205).change();
						break; 
						 case 'VUT':
						$('#applicant_nationality_id').val(206).change();
						break; 
						 case 'VAT':
						$('#applicant_nationality_id').val(207).change();
						break; 
						 case 'VEN':
						$('#applicant_nationality_id').val(208).change();
						break; 
						 case 'VNM':
						$('#applicant_nationality_id').val(209).change();
						break; 
						 case 'YEM':
						$('#applicant_nationality_id').val(210).change();
						break; 
						 case 'ZMB':
						$('#applicant_nationality_id').val(211).change();
						break; 
						 case 'ZWE':
						$('#applicant_nationality_id').val(212).change();
						break; 
						 case 'ESP':
						$('#applicant_nationality_id').val(213).change();
						break; 
						 case 'NFK':
						$('#applicant_nationality_id').val(214).change();
						break; 
						 case 'SPM':
						$('#applicant_nationality_id').val(215).change();
						break; 
						 case 'AIA':
						$('#applicant_nationality_id').val(216).change();
						break; 
						 case 'SGS':
						$('#applicant_nationality_id').val(217).change();
						break; 
						 case 'SHN':
						$('#applicant_nationality_id').val(218).change();
						break; 
						 case 'SJM':
						$('#applicant_nationality_id').val(220).change();
						break; 
						 case 'GUF':
						$('#applicant_nationality_id').val(222).change();
						break; 
						 case 'MYT':
						$('#applicant_nationality_id').val(223).change();
						break; 
						 case 'BMU':
						$('#applicant_nationality_id').val(224).change();
						break; 
						 case 'GUM':
						$('#applicant_nationality_id').val(225).change();
						break; 
						 case 'MAC':
						$('#applicant_nationality_id').val(226).change();
						break; 
						 case 'MNP':
						$('#applicant_nationality_id').val(227).change();
						break; 
						 case 'GLP':
						$('#applicant_nationality_id').val(228).change();
						break; 
						 case 'BVT':
						$('#applicant_nationality_id').val(229).change();
						break; 
						 case 'MAF':
						$('#applicant_nationality_id').val(230).change();
						break; 
						 case 'IMN':
						$('#applicant_nationality_id').val(231).change();
						break; 
						 case 'GRL':
						$('#applicant_nationality_id').val(232).change();
						break; 
						 case 'IOT':
						$('#applicant_nationality_id').val(233).change();
						break; 
						 case 'SHN':
						$('#applicant_nationality_id').val(236).change();
						break; 
						 case 'CYM':
						$('#applicant_nationality_id').val(237).change();
						break; 
						 case 'CUW':
						$('#applicant_nationality_id').val(238).change();
						break; 
						 case 'FRO':
						$('#applicant_nationality_id').val(239).change();
						break; 
						 case 'MTQ':
						$('#applicant_nationality_id').val(240).change();
						break; 
						 case 'NIU':
						$('#applicant_nationality_id').val(241).change();
						break; 
						 case 'CXR':
						$('#applicant_nationality_id').val(243).change();
						break; 
						 case 'ATA':
						$('#applicant_nationality_id').val(244).change();
						break; 
						 case 'VIR':
						$('#applicant_nationality_id').val(245).change();
						break; 
						 case 'CCK':
						$('#applicant_nationality_id').val(246).change();
						break; 
						 case 'MSR':
						$('#applicant_nationality_id').val(247).change();
						break; 
						 case 'HMD':
						$('#applicant_nationality_id').val(249).change();
						break; 
						 case 'WLF':
						$('#applicant_nationality_id').val(250).change();
						break; 
						 case 'GGY':
						$('#applicant_nationality_id').val(251).change();
						break; 
						 case 'NLD':
						$('#applicant_nationality_id').val(252).change();
						break; 
						 case 'REU':
						$('#applicant_nationality_id').val(253).change();
						break; 
						 case 'FLK':
						$('#applicant_nationality_id').val(254).change();
						break; 
						 case 'HKG':
						$('#applicant_nationality_id').val(255).change();
						break; 
						 case 'GIB':
						$('#applicant_nationality_id').val(256).change();
						break; 
						 case 'ABW':
						$('#applicant_nationality_id').val(257).change();
						break; 
						 case 'JEY':
						$('#applicant_nationality_id').val(259).change();
						break; 
						 case 'TKL':
						$('#applicant_nationality_id').val(260).change();
						break; 
						 case 'VGB':
						$('#applicant_nationality_id').val(261).change();
						break; 
						 case 'ATF':
						$('#applicant_nationality_id').val(262).change();
						break; 
						 case 'PCN':
						$('#applicant_nationality_id').val(263).change();
						break; 
						 case 'NCL':
						$('#applicant_nationality_id').val(264).change();
						break; 
						 case 'PRI':
						$('#applicant_nationality_id').val(265).change();
						break; 
						 case 'UMI':
						$('#applicant_nationality_id').val(266).change();
						break; 
						 case 'ASM':
						$('#applicant_nationality_id').val(267).change();
						break; 
						 case 'PYF':
						$('#applicant_nationality_id').val(268).change();
						break; 




                    	}
                    	// if (value == "IND")
                    	// 	$("#applicant_nationality_id").val("83").change();

                    }
                });
            });
        }
        catch (e) {
            var error = "error" + e;
        }

    }

});
