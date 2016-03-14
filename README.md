# hl7-argonaut-fhir
HL7 Argonaut FHIR project for Clinical Meteor (OAuth Server and REST interfaces for HL7).    
[http://hl7-argonaut-fhir.meteor.com](http://hl7-argonaut-fhir.meteor.com)  

**UPDATE:  We now have an HL7 FHIR Server!**  

==============================
#### Installation  

````bash
# install the hl7-fhir package
meteor add clinical:hl7-fhir

# install the reference app
git clone http://github.com/awatson1978/hl7-argonaut-fhir
cd hl7-argonaut-fhir/webapp
meteor

# run the reference app with local package development
METEOR_OFFLINE_CATALOG=true PACKAGE_DIRS="../packages" meteor
````




==============================
#### Argonaut Links

[HL7 FHIR Argonaut Homepage](http://argonautwiki.hl7.org/index.php?title=Main_Page)  
[Argonaut Project Implementation Program](http://www.hl7.org/documentcenter/public_temp_5CA28742-1C23-BA17-0CDCC42B408067A3/wg/argonaut/Argonaut%20Implementation%20Program%20Kickoff-24%20Feb%202015-v3.pdf)  
[Argonaut Project Google Group](https://groups.google.com/forum/#!forum/argonaut-project)  
[Argonaut Project Spreadsheet](https://docs.google.com/spreadsheets/d/1mJRn7jHeED5SN-ZRhOh3V61wXmIKfaskQUF9nbUSkvY/edit)  
[Example Patient Data](http://hl7-fhir.github.io/overview-dev.html)  
[oauth2orize](https://www.npmjs.com/package/oauth2orize)

==============================
#### Implementation Progress

[http://projectcrucible.org/dashboards/argonaut](http://projectcrucible.org/dashboards/argonaut)  
[http://www.hl7.org/fhir/2016Jan/testscript.html](http://www.hl7.org/fhir/2016Jan/testscript.html)  
[https://touchstone.aegis.net/touchstone/](https://touchstone.aegis.net/touchstone/)  
[https://touchstone.aegis.net/touchstone/testdefinitions](https://touchstone.aegis.net/touchstone/testdefinitions)  
[https://github.com/argonautproject/implementation-program/wiki](https://github.com/argonautproject/implementation-program/wiki)  


==============================
#### HL7 FHIR Resources  

The ``hl7-argonaut-fhir`` package now comes with schemas for two dozen resources from the [HL7 FHIR Resource Index](https://www.hl7.org/fhir/resourcelist.html).  

Of the two dozen resources that we're starting with, the following are the most mature and have the highest priority.  Start here first.   


[ClinicalImpression](https://github.com/clinical-meteor/hl7-resource-clinical-impression)  
[DiagnosticOrder](https://github.com/clinical-meteor/hl7-resource-diagnostic-order)  
[MedicationOrder](https://github.com/clinical-meteor/hl7-resource-medication-order)    
[Patient](https://github.com/clinical-meteor/hl7-resource-patient)  
[Specimen](https://github.com/clinical-meteor/hl7-resource-specimen)  
[Questionnaire](https://github.com/clinical-meteor/hl7-resource-questionnaire)  
[QuestionnaireResponse](https://github.com/clinical-meteor/hl7-resource-questionnaire-response)  
Sequence  

==============================
#### FHIR Oauth2 Server

##### Step 1  Get yourself an OAuth2 Server

[prime-8-consulting/meteor-oauth2](https://github.com/prime-8-consulting/meteor-oauth2)  

````
cd examples/resourceServer
meteor --port 3100

cd examples/clientApplication
meteor --port 3200
````

##### Step 2: Install a FHIR Resource

[prime-8-consulting/meteor-oauth2](https://github.com/prime-8-consulting/meteor-oauth2)  

````
cd examples/resourceServer
meteor add clinical:hl7-resource-diagnostic-order
````

##### Step 3:  Configure the Resource Server

##### Step 4:  Authenticate

##### Step 5:  Use Postman to access a Diagnostic Resource




==============================
#### FHIR Server Documentation  

![FHIR Server Documentation](https://raw.githubusercontent.com/prime-8-consulting/meteor-oauth2/master/documentation/OAuthWebSequenceWithConfig.png)

==============================
#### Implementation Sprints  

[Implementation Sprint 1](https://github.com/argonautproject/implementation-program/wiki/Implementation-Sprint-1)  
[Implementation Sprint 2](https://github.com/argonautproject/implementation-program/wiki/Implementation-Sprint-2)  
[Implementation Sprint 3](https://github.com/argonautproject/implementation-program/wiki/Implementation-Sprint-3)

==============================
#### Additional Node/Meteor Links

[Node On FHIR](https://github.com/medcafe/NodeOnFHIR)  
[Possible API inspired by mqtt-collection](https://atmospherejs.com/perak/mqtt-collection)  
