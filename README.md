# hl7-argonaut-fhir
HL7 Argonaut FHIR project for Clinical Meteor (OAuth Server and REST interfaces for HL7).    
[http://hl7-argonaut-fhir.meteor.com](http://hl7-argonaut-fhir.meteor.com)  

**UPDATE:  We now have an HL7 FHIR Server!**  


==============================
#### Argonaut Project Links

[HL7 FHIR Argonaut Homepage](http://argonautwiki.hl7.org/index.php?title=Main_Page)  
[Argonaut Project Implementation Program](http://www.hl7.org/documentcenter/public_temp_5CA28742-1C23-BA17-0CDCC42B408067A3/wg/argonaut/Argonaut%20Implementation%20Program%20Kickoff-24%20Feb%202015-v3.pdf)  
[Argonaut Project Spreadsheet](https://docs.google.com/spreadsheets/d/1mJRn7jHeED5SN-ZRhOh3V61wXmIKfaskQUF9nbUSkvY/edit)  
[Example Patient Data](http://hl7-fhir.github.io/overview-dev.html)  

==============================
#### Connect with the Community

[groups.google.com/argonaut-project](https://groups.google.com/forum/#!forum/argonaut-project)  
[http://community.fhir.org]( http://community.fhir.org)  
[http:///chat.fhir.org](http:///chat.fhir.org)

==============================
#### FHIR Server Documentation  

We are now using the [prime-8-consulting/meteor-oauth2](https://github.com/prime-8-consulting/meteor-oauth2) server as our FHIR Authentication Server.  

![FHIR Server Documentation](https://raw.githubusercontent.com/prime-8-consulting/meteor-oauth2/master/documentation/OAuthWebSequenceWithConfig.png)  


==============================
#### HL7 FHIR Resources  

We now support the following resources for your server:

[ClinicalImpression](https://github.com/clinical-meteor/hl7-resource-clinical-impression)  
[DiagnosticOrder](https://github.com/clinical-meteor/hl7-resource-diagnostic-order)  
[MedicationOrder](https://github.com/clinical-meteor/hl7-resource-medication-order)    
[Patient](https://github.com/clinical-meteor/hl7-resource-patient)  
[Specimen](https://github.com/clinical-meteor/hl7-resource-specimen)  
[Questionnaire](https://github.com/clinical-meteor/hl7-resource-questionnaire)  
[QuestionnaireResponse](https://github.com/clinical-meteor/hl7-resource-questionnaire-response)  


We will be implementing future Resources from the [HL7 FHIR Resource Index](https://www.hl7.org/fhir/resourcelist.html) and be providing profession services around integration in the near future.  

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

![Postman](https://raw.githubusercontent.com/clinical-meteor/hl7-argonaut-fhir/master/screenshots/PostmanAccessFhirDiagnosticResource.png)





==============================
#### Implementation Sprints  

[Implementation Sprint 1](https://github.com/argonautproject/implementation-program/wiki/Implementation-Sprint-1)  
[Implementation Sprint 2](https://github.com/argonautproject/implementation-program/wiki/Implementation-Sprint-2)  
[Implementation Sprint 3](https://github.com/argonautproject/implementation-program/wiki/Implementation-Sprint-3)

==============================
#### Implementation Progress Notes

[http://projectcrucible.org/dashboards/argonaut](http://projectcrucible.org/dashboards/argonaut)  
[http://www.hl7.org/fhir/2016Jan/testscript.html](http://www.hl7.org/fhir/2016Jan/testscript.html)  
[https://touchstone.aegis.net/touchstone/](https://touchstone.aegis.net/touchstone/)  
[https://touchstone.aegis.net/touchstone/testdefinitions](https://touchstone.aegis.net/touchstone/testdefinitions)  
[https://github.com/argonautproject/implementation-program/wiki](https://github.com/argonautproject/implementation-program/wiki)  

==============================
#### Additional Node/Meteor Links

[Node On FHIR](https://github.com/medcafe/NodeOnFHIR)  
[Possible API inspired by mqtt-collection](https://atmospherejs.com/perak/mqtt-collection)  
[Express Bearer Token](https://www.npmjs.com/package/express-bearer-token)
