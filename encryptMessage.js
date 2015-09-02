// Variables encryptDictionary, encryptDictionaryTwo and encryptDictionaryThree contains the database to encode secretMessages. In order to work I had to switch
// the order of the key and value in each object.

var encryptDictionary = {'a':'1', 'an':'2', 'all':'3', 'at':'4', 'and':'5', 'art':'6', 'arms':'7', 'about':'8', 'above':'9', 'absent':'10', 'absurd':'11', 'adorn':'12', 'adopt':'13', 'adore':'14', 'advise':'15', 'adjust':'16', 'adjourn':'17', 'afford':'18', 'affront':'19', 'affair':'20', 'again':'21', 'april':'22', 'agent':'23', 'alter':'24', 'ally':'25', 'any':'26', 'appear':'27', 'appoint':'28', 'august':'29', 'approve':'30', 'arrest':'31', 'arraign':'32', 'amuse':'33', 'assign':'34', 'assume':'35', 'attempt':'36', 'atone':'37', 'attack':'38', 'alarm':'39', 'action':'40', 'accomplish':'41', 'apprehend':'42', 'abates':'43', 'accommodate':'44', 'alternative':'45', 'artillery':'46', 'ammunition':'47', 'be':'48', 'bay':'49', 'by':'50', 'best':'51', 'but':'52', 'buy':'53', 'bring':'54', 'boat':'55', 'barn':'56', 'banish':'57', 'baker':'58', 'battle':'59', 'better':'60', 'beacon':'61', 'behalf':'62', 'bitter':'63', 'bottom':'64', 'bounty':'65', 'bondage':'66', 'baron':'67', 'brigade':'68', 'business':'69', 'battery':'70', 'battalion':'71', 'british':'72', 'camp':'73', 'came':'74', 'cost':'75', 'cost':'76', 'change':'77', 'carry':'78', 'clergy':'79', 'common':'80', 'consult':'81', 'contest':'82', 'contract':'83', 'content':'84', 'Congress':'85', 'captain':'86', 'careful':'87', 'city':'88', 'clamor':'89', 'column':'90', 'copy':'91', 'cover':'92', 'county':'93', 'courage':'94', 'credit':'95', 'custom':'96', 'compute':'97', 'conduct':'98', 'comply':'99', 'confine':'100', 'caution':'101', 'conquer':'102', 'coward':'103', 'confess':'104', 'convict':'105', 'cannon':'106', 'character':'107', 'circumstance':'108', 'clothier':'109', 'company':'110', 'confident':'111', 'committee':'112', 'continue':'113', 'contradict':'114', 'correspond':'115', 'controversy':'116', 'commission':'117', 'commissioner':'118', 'constitution':'119', 'date':'120', 'day':'121', 'dead':'122', 'do':'123', 'die':'124', 'damage':'125', 'doctor':'126', 'dirty':'127', 'drummer':'128', 'daily':'129', 'dispatch':'130', 'distant':'131', 'danger':'132', 'dislodge':'133', 'dismiss':'134', 'dragoon':'135', 'detain':'136', 'divert':'137', 'discourse':'138', 'disband':'139', 'dismount':'140', 'disarm':'141', 'detect':'142', 'defense':'143', 'deceive':'144', 'delay':'145', 'difficult':'146', 'disapprove':'147', 'disregard':'148', 'disappoint':'149', 'disagree':'150', 'disorder':'151', 'dishonest ':'152', 'discover':'153', 'december':'154', 'demolish':'155', 'deliver':'156', 'desolate':'157', 'during':'158', 'ear':'159', 'eye':'160', 'end':'161', 'enquire':'162', 'effect':'163', 'endure':'164', 'enforce':'165', 'engage':'166', 'enclose':'167', 'equip':'168', 'excuse':'169', 'exert':'170', 'expand':'171', 'expose':'172', 'extort':'173', 'express':'174', 'embark':'175', 'employ':'176', 'explore':'177', 'enemy':'178', 'example':'179', 'ambassador':'180', 'engagement':'181', 'experience':'182', 'evacuate':'183', 'farm':'184', 'face':'185', 'fate':'186', 'FALSE':'187', 'friend':'188', 'fen':'189', 'find':'190', 'form':'191', 'fort':'192', 'fleet':'193', 'famine':'194', 'father':'195', 'foggy':'196', 'folly':'197', 'frugal':'198', 'faithful':'199', 'favor':'200', 'faulty':'201', 'foreign':'202', 'forget':'203', 'fulfill':'204', 'factor':'205', 'faulty':'206', 'favorite':'207', 'fortune':'208', 'forget':'209', 'foreigner':'210', 'fortitude':'211', 'fortify':'212', 'formidable':'213', 'foundation':'214', 'february':'215', 'get':'216', 'great':'217', 'good':'218', 'gun':'219', 'good':'220', 'gain':'221', 'guide':'222', 'gold':'223', 'glory':'224', 'gunner':'225', 'gloomy':'226', 'govern':'227', 'grandeur':'228', 'guilty':'229', 'guinea':'230', 'gallant':'231', 'gazette':'232', 'grateful':'233', 'glacis':'234', 'general':'235', 'garrison':'236', 'gentleman':'237', 'glorious':'238', 'gradual':'239', 'grenadier':'240', 'hay':'241', 'he':'242', 'his':'243', 'him':'244', 'haste':'245', 'hand':'246', 'hang':'247', 'hour?':'248', 'have':'249', 'head':'250', 'high':'251', 'hill':'252', 'hope':'253', 'hut':'254', 'horse':'255', 'house':'256', 'happy':'257', 'hardy':'258', 'harvest':'259', 'horrid':'260', 'horseman':'261', 'human':'262', 'havoc':'263', 'healthy':'264', 'heavy':'265', 'honest':'266', 'hunger':'267', 'honor':'268', 'harmony':'269', 'hazardous':'270', 'hesitate':'271', 'history':'272', 'horrible':'273', 'hospital':'274', 'hurricane':'275', 'hypocrite':'276', 'DOCUMENT DAMAGE':'277', 'DOCUMENT DAMAGE':'278', 'DOCUMENT DAMAGE':'279', 'I':'280', 'if':'281', 'in':'282', 'is':'283', 'it':'284', 'ice':'285', 'ink':'286', 'into':'287', 'instance':'288', 'island':'289', 'impress':'290', 'improve':'291', 'encamp':'292', 'incur':'293', 'infest':'294', 'enforce':'295', 'instance':'296', 'ensnare':'297', 'instruct':'298', 'intrigue':'299', 'entrust':'300', 'instant':'301', 'invest':'302', 'invite':'303', 'ignorant':'304', 'impudent':'305', 'industry':'306', 'infamous':'307', 'influence':'308', 'infantry':'309', 'infantry (symbol)':'310', 'injury':'311', 'innocent':'312', 'instrument':'313', 'intimate':'314', 'illegal':'315', 'imagine':'316', 'important':'317', 'imprison':'318', 'improper':'319', 'encumber':'320', 'inhuman':'321', 'inquiry':'322', 'interview':'323', 'incorrect':'324', 'intercede':'325', 'interfere':'326', 'intermix':'327', 'introduce':'328', 'immediate':'329', 'impatient':'330', 'encouragement':'331', 'infection':'332', 'irregular':'333', 'invalid':'334', 'indians':'335', 'june':'336', 'july':'337', 'jury':'338', 'jealous':'339', 'justify':'340', 'january':'341', 'key':'342', 'king':'343', 'kill':'344', 'know':'345', 'law':'346', 'land':'347', 'love':'348', 'low':'349', 'lot':'350', 'lord':'351', 'light':'352', 'last':'353', 'learn':'354', 'lady':'355', 'letter':'356', 'levy':'357', 'levies-new':'358', 'liar':'359', 'lucky':'360', 'language':'361', 'limit':'362', 'liquid':'363', 'longitude':'364', 'latitude':'365', 'laudable':'366', 'legible':'367', 'liberty':'368', 'lottery':'369', 'literature':'370', 'man':'371', 'map':'372', 'may':'373', 'march':'374', 'mast':'375', 'make':'376', 'met':'377', 'met':'378', 'my':'379', 'much':'380', 'move':'381', 'most':'382', 'mine':'383', 'many':'384', 'mercy':'385', 'moment':'386', 'murder':'387', 'measure':'388', 'method':'389', 'mischief':'390', 'mistake':'391', 'molest':'392', 'majesty':'393', 'meditate':'394', 'memory':'395', 'messenger':'396', 'misery':'397', 'moveable':'398', 'multitude':'399', 'miscarry':'400', 'misfortune':'401', 'miserable':'402', 'mercenary':'403', 'majority':'404', 'minority':'405', 'memorial':'406', 'mysterious':'407', 'manufacture':'408', 'moderator':'409', 'ministerial':'410', 'name':'411', 'new':'412', 'no':'413', 'not':'414', 'night':'415', 'never':'416', 'needful':'417', 'number':'418', 'neither':'419', 'nothing':'420', 'neglect':'421', 'nation':'422', 'navy':'423', 'natural':'424', 'negative':'425', 'negligence':'426', 'november':'427', 'necessary':'428', 'nobility':'429', 'oath':'430', 'of':'431', 'off':'432', 'on':'433', 'or':'434', 'out':'435', 'offer':'436', 'office':'437', 'onset':'438', 'order':'439', 'over':'440', 'obstruct':'441', 'obtain':'442', 'observe':'443', 'occur':'444', 'offense':'445', 'omit':'446', 'oppose':'447', 'obligate':'448', 'obstinate':'449', 'obviate':'450', 'occupy':'451', 'operate':'452', 'origin':'453', 'ornament':'454', 'overcome':'455', 'overlook':'456', 'overtake':'457', 'overrun':'458', 'overthrow':'459', 'obedience':'460', 'objection':'461', 'october':'462', 'obscure':'463', 'occasion':'464', 'opinion':'465', 'oppression':'466', 'opportunity':'467', 'obligation':'468', 'pay':'469', 'peace':'470', 'plan':'471', 'put':'472', 'port':'473', 'proof':'474', 'please':'475', 'part':'476', 'paper':'477', 'pardon':'478', 'party':'479', 'perfect':'480', 'pilot':'481', 'prudent':'482', 'publish':'483', 'purchase':'484', 'purpose':'485', 'people':'486', 'pleasure':'487', 'produce':'488', 'prison':'489', 'progress':'490', 'promise':'491', 'proper':'492', 'prosper':'493', 'prospect':'494', 'punish':'495', 'partake':'496', 'perform':'497', 'permit':'498', 'pervert':'499', 'prepare':'500', 'prevail':'501', 'preserve':'502', 'pretend':'503', 'promote':'504', 'propose':'505', 'protect':'506', 'provost':'507', 'pursue':'508', 'passenger':'509', 'passion':'510', 'pension':'511', 'period':'512', 'persecute':'513', 'poverty':'514', 'power or powerful':'515', 'prosperous':'516', 'punishment':'517', 'preferment':'518', 'production':'519', 'pursuant':'520', 'pensioner':'521', 'Parliament':'522', 'persecution':'523', 'practicable':'524', 'profitable':'525', 'particular':'526', 'petition':'527', 'profession':'528', 'proclaim':'529', 'provision':'530', 'protection':'531', 'quick':'532', 'question':'533', 'quantity':'534', 'quality':'535', 'rank':'536', 'rain':'537', 'run':'538', 'rule':'539', 'read':'540', 'rise':'541', 'random':'542', 'ransom':'543', 'rather':'544', 'real':'545', 'riot':'546', 'robber':'547', 'ready':'548', 'ruin':'549', 'ruler':'550', 'rapid':'551', 'reader':'552', 'rebel':'553', 'rigor':'554', 'river':'555', 'receipt':'556', 'refit':'557', 'regain':'558', 'rejoice':'559', 'relate':'560', 'request':'561', 'relax':'562', 'redoubt':'563', 'rely':'564', 'remit':'565', 'reprieve':'566', 'repulse':'567', 'reward':'568', 'retract':'569', 'resign':'570', 'ratify':'571', 'recompense':'572', 'regular':'573', 'regulate':'574', 'rigorous':'575', 'recital':'576', 'recover':'577', 'remember':'578', 'remittance':'579', 'represent':'580', 'rebellion':'581', 'reduction':'582', 'remarkable':'583', 'reinforcement':'584', 'refugee':'585', 'sail':'586', 'see':'587', 'sea':'588', 'scheme':'589', 'set':'590', 'send':'591', 'ship':'592', 'safe':'593', 'same':'594', 'sky':'595', 'secret':'596', 'seldom':'597', 'sentence':'598', 'servant':'599', 'signal':'600', 'silent':'601', 'suffer':'602', 'sudden':'603', 'surprise':'604', 'summer':'605', 'speaker':'606', 'steady':'607', 'submit':'608', 'surpass':'609', 'sanction':'610', 'sensible':'611', 'singular':'612', 'soldier':'613', 'sovereign':'614', 'security':'615', 'severity ':'616', '?':'617', 'september':'618', 'surrender':'619', 'serviceable':'620', 'security':'621', 'severity ':'622', 'society':'623', 'superior':'624', 'the':'625', 'that':'626', 'this':'627', 'these':'628', 'they':'629', 'there':'630', 'thing':'631', 'though':'632', 'time':'633', 'to':'634', 'troops':'635', 'thankful':'636', 'therefore':'637', 'timber':'638', 'tory':'639', 'transport':'640', 'trail':'641', 'traitor':'642', 'transgress':'643', 'translate':'644', 'terrible':'645', 'tyranny':'646', 'vain':'647', 'vaunt':'648', 'vouch':'649', 'vacant':'650', 'vary':'651', 'venture':'652', 'vital':'653', 'vulgar':'654', 'value':'655', 'virtue':'656', 'visit':'657', 'valiant':'658', 'victory':'659', 'vigilant':'660', 'vigorous':'661', 'violent':'662', 'volunteer':'663', 'valuable':'664', 'voluntary':'665', 'up':'666', 'upper':'667', 'upon':'668', 'unto':'669', 'unarm':'670', 'unfit':'671', 'unheard':'672', 'unsafe':'673', 'uniform':'674', 'uncertain':'675', 'uncommon':'676', 'unfriendly':'677', 'unfortunate':'678', 'wind':'679', 'war':'680', 'war':'681', 'we':'682', 'will':'683', 'with':'684', 'when':'685', 'wharf':'686', 'wound':'687', 'wood':'688', 'want':'689', 'wait':'690', 'write':'691', 'who':'692', 'wish':'693', 'whose':'694', 'wages':'695', 'warlike':'696', 'welfare':'697', 'willing':'698', 'winter':'699', 'water':'700', 'woman':'701', 'writer':'702', 'wagon':'703', 'weary':'704', 'warrant':'705', 'yet':'706', 'you':'707', 'your':'708', 'yesterday':'709', 'zeal':'710', 'Gen Washington':'711', 'Clinton':'712', 'Tryon':'713', 'Erskind':'714', 'Vaughn':'715', 'Robinson':'716', 'Brown':'717', 'Gen Garth':'718', 'North, Lord':'719', 'Germain':'720', 'Bolton John':'721', 'Culper Sam':'722', 'Culper Junr.':'723', 'Austin Roe':'724', 'C. Brewster':'725', 'Rivingston':'726', 'New York':'727', 'Long Island':'728', 'Setauket':'729', 'Kingsbridge':'730', 'Bergen':'731', 'Staten Island':'732', 'Boston':'733', 'Rhode Islan':'734', 'Connecticut':'735', 'New Jersey':'736', 'Pensylvania':'737', 'Maryland':'738', 'Virginia':'739', 'North Carolina':'740', 'South Carolina':'741', 'Georgia':'742', 'Quebeck':'743', 'Hallifax':'744', 'England':'745', 'London':'746', 'Portsmouth':'747', 'Plymouth':'748', 'Ireland':'749', 'Corke':'750', 'Scotland':'751', 'West Indies':'752', 'East Indies':'753', 'Gibralter':'754', 'France':'755', 'Spain':'756', 'Scotland':'757', 'Portugal':'758', 'Denmark':'759', 'Russia':'760', 'Germany':'761', 'Hanover':'762', 'Head Quarters':'763'};

var encryptDictionaryTwo = {'A' : 'e','B'	: 'f','C'	: 'g','D'	: 'h','E'	: 'i','F'	: 'j','G'	: 'a','H'	: 'b','I'	: 'c','J'	: 'd','K'	: 'o','L'	: 'm','M'	: 'n','N'	: 'p','O'	: 'q','P'	: 'r','Q'	: 'k','R'	: 'l','S'	: 'u','T'	: 'v','U'	: 'w','V'	: 'x','W'	: 'y','X'	: 'z','Y'	: 's','Z'	: 't',}

var encryptDictionaryThree = {'1'	: 'e','2'	: 'f','3'	: 'g','4'	: 'i','5'	: 'k','6'	: 'm','7'	: 'n','8'	: 'o','9'	: 'q','0'	: 'u',}

// The secretMessage which needs to be encoded will come in a single string. In order to encode each word I will split the single string into several
// strings, which contain each one word or a number. Function to split secretMessage into an array of single strings:

function convertStringOfWordsToArrayOfStrings (secretMessage){
	return secretMessage.split(" ");
}

// This function checks if the string contains a number. I took this function from: 
// http://stackoverflow.com/questions/9716468/is-there-any-function-like-isnumeric-in-javascript-to-validate-numbers

function isNumber(n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
}

// Function encrypt_message will take the secretMessage and encode it.

function  encrypt_message (secretMessage){
	var arrayOfWords = convertStringOfWordsToArrayOfStrings(secretMessage);
	var text = "";
	for (i=0 ; i < arrayOfWords.length; i++) {

			//General (inverse of Colonel level): encrypts numbers using encryptDictionaryThree. Frist check if string contains a number, then encode.
			if (isNumber(arrayOfWords[i])) {
				var stringOfNumberWhichWillBeLettersSoon = arrayOfWords[i]
				text = text + " _" ;
				for(a= 0; a < stringOfNumberWhichWillBeLettersSoon.length ; a++) {
				var encryptedNumber = encryptDictionaryThree[stringOfNumberWhichWillBeLettersSoon[a]]
				text = text + encryptedNumber;}
				text = text + "_"
			}

			// General(inverse of Sergeant level, part 1/2): encrypts proper nouns (names and places found in dictionary) using encryptDictionary.
			else if (arrayOfWords[i][0]== arrayOfWords[i][0].toUpperCase()) {
				var properWord = arrayOfWords[i] +  " " + arrayOfWords[i+1]
				var encryptedProperWord = encryptDictionary[properWord]
				text = text + " " + encryptedProperWord;
				i = i + 1;
			}

			//General (inverse of Sergeant level, part 2/2): encrypt word found in encryptDictionary.
			else if (arrayOfWords[i] in encryptDictionary) {
				var encryptedWord = encryptDictionary[arrayOfWords[i]]
				text = text + " " + encryptedWord;
			}

			// General (inverse of Major part 1/2): for words not found in encryptDictionary. Spells out letter by letter.
			else {
				var stringOfLetters = arrayOfWords[i];
				text = text + " " ;
				var shouldSpellWordRun = true;

				//General (extra challenge): Find if root of word is in encryptDictionary and adds ~. I used two loops: First runs through the supplied 
				//word and creates subwords through cuttting of one letter a time till only 4 letters are left. Second loop runs through the keys and 
				//does the same. If comparison of the subwords and subkeys is successful adds ~.

				topLoop:
				for (b = stringOfLetters.length; b>4; b--) {
				    var subWord = stringOfLetters.substring(0,b);

					for (key in encryptDictionary) {
						for (c = key.length; c>4; c--) {
				           var subKey = key.substring(0,c)

				           if (subWord == subKey) {
				           text = text + "~" + encryptDictionary[key] ;
				           shouldSpellWordRun = false;
				           break topLoop;
				            } }
				   		}
				}	

			//General (inverse of Major 2/2):
			if (shouldSpellWordRun == true){
			var stringOfLetters = arrayOfWords[i].toUpperCase()
			for (k=0; k< stringOfLetters.length ; k++){
				var encryptedLetter = encryptDictionaryTwo[stringOfLetters[k]]
				text = text + encryptedLetter;
				}
			}
			}
	}
	return text.toLowerCase().substring(1, text.length ); // to match output I remove starting space;
}

// Javassript will run when the page is fully loaded and the #encryptButton on the webpage is clicked. It takes the input from the textarea
// and tosses it into the function encrypt_message as the secretMessage. Decoded message will pop up as a javascript alert.

$(document).ready(function(){
 $('#encryptButton').click(function(){
	var finalEncrypt = $('textarea[name="toEncryptMessage"]').val()
	alert(encrypt_message(finalEncrypt));
	})
});
