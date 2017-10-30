/* code for java html page */

 /*Code for stock info, it is not in use right now */
 function getHistoricalData(strCompanyCode) {
			$('#divBolsa div.cssLoading').show();
			var url = 'http://query.yahooapis.com/v1/public/yql';
			var infoArray = new Array(366);
			var intNumYears = 5;
			if ($('#divYears select').length>0) intNumYears=$('#divYears select').val();
			var currentYear = new Date().getFullYear();
			var monthNames = [ "January", "February", "March", "April", "May", "June",
				"July", "August", "September", "October", "November", "December" ];
			infoHeader = ["Date"];
			for (intAux=0;intAux<intNumYears;intAux++) {
				infoHeader.push("Year " + (currentYear-intAux));
			}
			infoArray[0] = infoHeader;
			var dteStartDate = new Date(new Date().getFullYear(),0,1);
			for (intAux=1;intAux<infoArray.length;intAux++) {
				infoInfo=[new Date(dteStartDate.getFullYear(),dteStartDate.getMonth(), dteStartDate.getDate()+intAux-1)];
				for (intYearAux=0;intYearAux<intNumYears;intYearAux++) {
					infoInfo.push(null);
				}
				infoArray[intAux]=infoInfo;
			}
			var options = {
					curveType: 'function',
					title: strCompanyCode + ' Performance',
					aggregationTarget: 'series',
					interpolateNulls: true,
					hAxis: {format:'MMM',ticks: [new Date(currentYear,0,1), new Date(currentYear,1,1), new Date(currentYear,2,1), new Date(currentYear,3,1),
						new Date(currentYear,4,1), new Date(currentYear,5,1), new Date(currentYear,6,1), new Date(currentYear,7,1),
						new Date(currentYear,8,1), new Date(currentYear,9,1), new Date(currentYear,10,1), new Date(currentYear,11,1)]  }
				};
			for (intYear=0;intYear<intNumYears;intYear++) {
				var startDate = (currentYear-intYear) + '-01-01';
				var endDate = (currentYear-intYear) + '-12-31';
				var blnLeapYear = new Date((currentYear-intYear), 1, 29).getMonth() == 1;
				var data = encodeURIComponent('select * from yahoo.finance.historicaldata where symbol in ("' + strCompanyCode + '") and startDate = "' + startDate + '" and endDate = "' + endDate + '"');
				
				//++intRequest;
				++intReadingCompanyInfo;
				callFinanceWebService(url,data,infoArray,intYear+1,new Date((currentYear-intYear),0,1),options);
				
			};
		};
		
		
		function getHistoricalDataCompanies(lstCompanies) {
			$('#divBolsa div.cssLoading').show();
			var url = 'http://query.yahooapis.com/v1/public/yql';
			var infoArray = new Array(366);
			var dteStartDate = new Date(new Date().getFullYear(), new Date().getMonth()-11,1);
			var monthNames = [ "January", "February", "March", "April", "May", "June",
				"July", "August", "September", "October", "November", "December" ];
			infoHeader = ["Date"];
			for (intCompany=0;intCompany<lstCompanies.length;intCompany++) {
				infoHeader.push(lstCompanies[intCompany][1]);
			}
			infoArray[0] = infoHeader;
			for (intAux=1;intAux<infoArray.length;intAux++) {
				infoInfo=[new Date(dteStartDate.getFullYear(),dteStartDate.getMonth(), dteStartDate.getDate()+intAux-1)];
				for (intCompany=0;intCompany<lstCompanies.length;intCompany++) {
					infoInfo.push(null);
				}
				infoArray[intAux]=infoInfo;
			}
			var options = {
					curveType: 'function',
					title: 'All companies last 12 Months',
					aggregationTarget: 'series',
					interpolateNulls: true,
					hAxis: {format:'MMM',ticks: [new Date(dteStartDate.getFullYear(),dteStartDate.getMonth(),1), 
						new Date(dteStartDate.getFullYear(),dteStartDate.getMonth()+1,1), new Date(dteStartDate.getFullYear(),dteStartDate.getMonth()+2,1),
						new Date(dteStartDate.getFullYear(),dteStartDate.getMonth()+3,1), new Date(dteStartDate.getFullYear(),dteStartDate.getMonth()+4,1),
						new Date(dteStartDate.getFullYear(),dteStartDate.getMonth()+5,1), new Date(dteStartDate.getFullYear(),dteStartDate.getMonth()+6,1),
						new Date(dteStartDate.getFullYear(),dteStartDate.getMonth()+7,1), new Date(dteStartDate.getFullYear(),dteStartDate.getMonth()+8,1),
						new Date(dteStartDate.getFullYear(),dteStartDate.getMonth()+9,1), new Date(dteStartDate.getFullYear(),dteStartDate.getMonth()+10,1),
						new Date(dteStartDate.getFullYear(),dteStartDate.getMonth()+11,1)]	
						}
				};
			for (intCompany=0;intCompany<lstCompanies.length;intCompany++) {
				
				var startDate = dteStartDate.getFullYear() + '-' + (dteStartDate.getMonth()+1) + '-01';
				var endDate = new Date().getFullYear() + '-' + (new Date().getMonth()+1) + '-30';
				var data = encodeURIComponent('select * from yahoo.finance.historicaldata where symbol in ("' + lstCompanies[intCompany][0] + '") and startDate = "' + startDate + '" and endDate = "' + endDate + '"');
				
				++intReadingCompanyInfo;
				callFinanceWebService(url,data,infoArray,intCompany+1,dteStartDate,options);
				
			};
		};
	var intReadingCompanyInfo=0;
	function callFinanceWebService(url,data,infoArray,intIndex,dteStartDate,options){
		$.getJSON(url, 'q=' + data + "&env=http%3A%2F%2Fdatatables.org%2Falltables.env&format=json").done(function (data) {
					if (data.query.results!=null && data.query.results.quote!=null) {
						$.each(data.query.results.quote, function() {
							tDate = new Date(this.Date);
							if (!(tDate.getMonth()==1  && tDate.getDate()==29)){
								intPos = (tDate - dteStartDate)==0?1:Math.floor((tDate - dteStartDate)/(1000 * 60 * 60 * 24)) + 1;
								if (new Date(tDate.getFullYear(), 1, 29).getMonth() == 1 && tDate.getMonth()>1) {
									intPos -= 1;
								}
								if (intPos<infoArray.length) {
									infoItem = infoArray[intPos];
									infoItem[intIndex] = parseFloat(this.Adj_Close);
									infoArray[intPos] = infoItem;
								}
							}
						});
					 }
					 else
					 {
						for (intAux=1;intAux<infoArray.length;intAux++) {
							infoItem = infoArray[intAux];
							infoItem[intIndex] = 0;
							infoArray[intAux] = infoItem;
						}
						callFinanceWebService( url,data,infoArray,intIndex,dteStartDate,options);
					 }
					 --intReadingCompanyInfo;
					if (intReadingCompanyInfo==0) {
						$('#divBolsa div.cssLoading').fadeOut();
						var data = google.visualization.arrayToDataTable(infoArray);
						

						var chart = new google.visualization.LineChart(document.getElementById('chart_div'));
						chart.draw(data, options);
						if ($('#divRadio input[type=radio]').length==0) {
							createRadioButtons();
						}
					}
				})
					.fail(function (jqxhr, textStatus, error) {
					--intReadingCompanyInfo;
					var err = textStatus + ", " + error;
					$("#chart_div").text('Request failed: ' + err);
				});	
	}	
	lstCompanies = [["YHOO","YAHOO"],["MSFT","MICROSOFT"],["AAPL","APPLE"],["IBM","IBM"],["KO","COKE"],["PEP","PEPSICO"],["TSLA","TESLA"],["BAC","BANK OF AMERICA"]];
	strTipInfo = "Mostrar precio de accion de la empresa ";
  
	  function createRadioButtons(){
			$.each(lstCompanies, function(index,value) {
				$("#divRadio").append($('<input>').prop('type', 'radio').prop('name','radioCompanies').prop('data-value',value[0]).prop('id','radio'+index)).append($('<label>').prop('for','radio'+index).prop('title',strTipInfo + value[1]).text(value[1]));
			});
			$("#divRadio").append($('<input>').prop('type', 'radio').prop('name','radioCompanies').prop('data-value','ALL').prop('id','radio'+lstCompanies.length).prop('checked',true)).append($('<label>').prop('for','radio'+lstCompanies.length).prop('title','Mostrar el precio de la accion de todas las empresas en los ultimos 12 meses').text('SHOW ALL'));
			$( "#divRadio" ).buttonset();
			$('#divRadio input[type=radio]').click(function(){
				if ($(this).prop('data-value')!="ALL") {
					getHistoricalData($(this).prop('data-value'));
					if ($('#divYears').length>0) $('#divYears').show('blind');
				}
				else {
					getHistoricalDataCompanies(lstCompanies);
					if ($('#divYears').length>0) $('#divYears').hide('blind');
				}
			});
			$("#divRadio").append(($('<div>').prop('id','divYears')).hide().append(($('<select>').prop('id','selectYear').width(300))
					.append($("<option>").attr('value',1).text('Current Year'))
					.append($("<option>").attr('value',2).text('Current Year & Last Year'))
					.append($("<option>").attr('value',3).text('Current Year & 2 Last Years'))
					.append($("<option>").attr('value',4).text('Current Year & 3 Last Years'))
					.append($("<option>").attr('value',5).text('Current Year & 4 Last Years').attr("selected", "selected"))
					));
			$( "#selectYear" ).selectmenu({
				  change: function( event, data ) {
						getHistoricalData($('#divRadio input[type=radio]:checked').prop('data-value'));
					}
				 });
	  }
 /* End Of Code for stock info, it is not in use right now */	  
 
 //=========================== BEGIN EXTJS DEMO ====================================//
		Ext.require([
			'Ext.data.*',
			'Ext.tip.QuickTipManager',
			'Ext.window.MessageBox'
		]);	

		// define a template to use for the detail view
		var InfoTplMarkup = [
			'You have selected the user {name} who lives in {address} <br />',
			'his/her phone number is {phone} <br />',
			'click <a href="mailto:{email}">here</a> if you want to send him/her an email'
		];
		var InfoTpl = Ext.create('Ext.Template', InfoTplMarkup);	
		
		Ext.define('User', {
				extend: 'Ext.data.Model',
				fields: [
					{name:'name', 		type:'string'},
					{name:'email', 		type:'string'},
					{name:'address', 	type:'string'},
					{name:'phone', 		type:'int'},
					{name:'dob', 		type:'date'}
					],
				validations:	[
					{type: 'presence',  field: 'name'},
					{type: 'length',  	field: 'name',	min:3}
				]			
			});

		Ext.create('Ext.data.Store', {
				model: 'User',
				storeId: 'Users',
				autoLoad: true,
				autosync:true,
				proxy: {
					type: 'localstorage',
					id: 'localproxy'
				}
			});
		
		Ext.define('leftPanel', {
				extend: 'Ext.panel.Panel', 
				alias : 'widget.leftPanel',
				title: 'Info',
				collapsible: true,
				frame: false,
				html: 'Select an element from the grid'
			});		

		Ext.define('BottomPanel', {
				extend: 'Ext.panel.Panel', 
				alias : 'widget.bottomPanel',
				title: 'Explanation',
				collapsible: true,
				frame: true,
				html: 'This is a simple example with ExtJS Framework, we are storing the info in the local storage of your system so if you close and open the browser you will see the last info <br />Ejemplo para mostrar el uso del Framework ExtJS, utilizamos el almacenamiento local, es decir, si cierrar el navegador y vuelve a entrar vera la ultima informacion.'
			});				


			// create the Grid
			Ext.define('Grid', {
				extend: 'Ext.grid.Panel',
				alias : 'widget.gridTable',
				store: 'Users',
				frame: false,
				storeId: 'Users',
				title: 'Array Grid',
				collapsible: false,
				columns: [
					{header: 'Name',  dataIndex: 'name',  flex: 1},
					{header: 'Email',  dataIndex: 'email',  flex: 1},
					{header: 'Address',  dataIndex: 'address',  flex: 1},
					{header: 'Phone', dataIndex: 'phone', flex: 1, align: 'center'},
					{
						header: 'Age',
						dataIndex: 'dob',
						flex:1,
						align:'center',
						renderer: function(value) {
							if (value==undefined) {
								return "-";
							}
							else {
								intAge = new Date().getFullYear() - value.getFullYear();
								if (new Date().getMonth()<value.getMonth())
									intAge -=1;
								else if (new Date().getDate()<value.getDate())
									intAge -=1;
								return intAge;
								
							}
							
						}
					}
				],
				listeners: {
					selectionchange: function (view, selections, options) {
						if (selections.length)
						{
							form = Ext.getCmp('writerform');
							form.setActiveRecord(selections[0]);
							var detailPanel = Ext.getCmp('extMainForm').getComponent('leftPanel');
							detailPanel.update(InfoTpl.apply(selections[0].data));
						}
					}
				}
			});	
			
				
			
			
			
		Ext.define('writerform', {
			extend: 'Ext.form.Panel',
			id: 'writerform',
			alias: 'widget.writerform',
			collapsible: true,
			requires: ['Ext.form.field.Text'],
			frame: false,
			title: 'Edit User',
			defaultType: 'textfield',
			bodyPadding: 5,
			activeRecord: null,
			fieldDefaults: {
				anchor: '100%',
				labelAlign: 'right',
				msgTarget: 'side',
				labelWidth: 60
			},
			items: [{
						fieldLabel: 'Name',
						name: 'name',
						emptyText: 'enter name',
						allowBlank: false
					},{
						fieldLabel: 'Email',
						name: 'email',
						allowBlank: false,
						emptyText: 'enter email',
						vtype: 'email'
					},{
						fieldLabel: 'Address',
						name: 'address',
						emptyText: 'enter address',
						allowBlank: false
					},{
						fieldLabel: 'Phone',
						name: 'phone',
						allowBlank: false,
						minLength: '8',
						maxLength: '9', 
						emptyText: 'enter phone',
						maskRe: /[0-9.]/
					},{
						fieldLabel: 'DOB',
						name: 'dob',
						xtype: 'datefield',
						emptyText: 'enter date',
						maskRe: /[0-9\/]/,
						allowBlank: false,
						minValue: new Date(1900,0,1),
						maxValue: new Date()
					}],
			initComponent: function() {
				this.dockedItems = [{
						xtype: 'toolbar',
						dock: 'bottom',
						ui: 'footer',
						items: ['->',
						{
							itemId: 'save',
							text: 'Save',
							disabled: true,
							formBind: true,
							scope: this,
							handler: this.onSave
						}, {
							text: 'Create',
							formBind: true,
							scope: this,
							handler: this.onCreate
						}, {
							text: 'Reset',
							scope: this,
							handler: this.onReset	
						}, {
							itemId: 'delete',
							text: 'Delete',
							disabled: true,
							scope: this,
							handler: this.onDelete	
						}]
					}];
					this.callParent();
					},
			setActiveRecord: function(record){
				this.activeRecord = record;
				if (record) {
					this.down('#delete').enable();
					this.down('#save').enable();
					this.getForm().loadRecord(record);
				} else {
					this.down('#save').disable();
					this.down('#delete').disable();
					this.getForm().reset();
				}
			},
			onReset: function(){
				this.setActiveRecord(null);
				this.getForm().reset();
				grid = Ext.getCmp('extMainForm').down('grid');
				grid.getView().getSelectionModel().deselectAll();
				var detailPanel = Ext.getCmp('extMainForm').down('leftPanel');
				detailPanel.update('Select an element from the grid');
			},
			onSave: function(){
				var active = this.activeRecord,
					form = this.getForm();
				if (!active) {
					this.onCreate();
					return;
				}
				if (form.isValid()) {
					form.updateRecord(active);
					active.store.sync()
				}
			},
			onCreate: function(){
				var form = this.getForm();
				if (form.isValid()) {
					var store = Ext.data.StoreManager.get("Users");
					this.activeRecord = store.add(form.getValues())[0];
					form.updateRecord(this.activeRecord);
					grid = Ext.getCmp('extMainForm').down('grid');
					grid.getView().select(this.activeRecord, true, true);
					store.sync();
				}
			},
			onDelete: function () {
				var active = this.activeRecord;
				var currentForm = this;
				Ext.MessageBox.confirm('Confirm', 'Are you sure you want to remove it?', function(btn) {
					if (btn == 'yes')
						{
							var store = Ext.data.StoreManager.get("Users"); 
							store.remove(active);
							store.sync();
							currentForm.onReset();
						}
				});
			}
		});
	
		Ext.onReady(function(){
			
			Ext.tip.QuickTipManager.init();
			
			Ext.create('Ext.panel.Panel', {
				id: 'extMainForm',
				title: 'Working with ExtJS',
				layout: 'border',
				renderTo: 'extJS-example',
				height: '100%',
				flex: 1,
				items: [{
					itemId: 'leftPanel',
					xtype: 'leftPanel',
					flex: 1,
					region: 'west'
				},{
					itemId: 'grid',
					xtype: 'gridTable',
					region: 'center',
					flex: 3
				},{
					itemId: 'writerform',
					xtype: 'writerform',
					flex: 1,
					region: 'east'
				},{
					itemId: 'bottomPanel',
					xtype: 'bottomPanel',
					flex: 1,
					height:100,
					region: 'south'
				}]
			});			
			
			 var store = Ext.data.StoreManager.get("Users"); 
			 if (store.count()==0)
			 {
				var user = Ext.create('User', 
					{name: 'Michael Brown',email: 'Mbrown@email.com', address: 'Oliphant Street', phone: '55523422', dob: '01/01/1979'});
				store.add(user);
				user = Ext.create('User', 
					{name: 'Antonio Hernandez',email: 'aHernandez@email.com', address: 'Calle principal 4', phone: '698547452', dob: '01/01/1986'});
				store.add(user);
				store.sync();
			 }
		});
		/// ----------------------END EXTJS DEMO ------------------------//
/* End of the java html code */