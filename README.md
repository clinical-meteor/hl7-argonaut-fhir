# hl7-argonaut-fhir
HL7 Argonaut FHIR project for Clinical Meteor (OAuth Server and REST interfaces for HL7).    
[http://hl7-argonaut-fhir.meteor.com](http://hl7-argonaut-fhir.meteor.com)  

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
#### HL7 FHIR Resources  

The ``hl7-argonaut-fhir`` package now comes with schemas for two dozen resources from the [HL7 FHIR Resource Index](https://www.hl7.org/fhir/resourcelist.html).  

**Note: It cannot be stressed enough how preliminary these schemas are.  They are extremely experimental.**    

That being said, the HL7 FHIR project provides JSON schemas for the Argonaut resources, and it's a fairly straightforward matter to convert them to SimpleSchemas for Meteor.  The biggest issue is that they are complex schemas, specifying objects which don't yet exist in the Meteor ecosystem.  So, it's very likely that you might try to use one of the schemas, only to find that it throws errors because it doesn't have a definition for one of the objects specified in the schema.  Be warned.  

Of the two dozen resources that we're starting with, the following are the most mature and have the highest priority.  Start here first.   

```sh
ClinicalImpression
DiagnosticOrder
Patient
Specimen
Questionnaire
QuestionnaireResponse
Sequence
```

#### Contributing FHIR Resources

Generally speaking, the HL7 FHIR Resource objects are well defined by a standards committee, and fairly straightforward.  As such, we'll take most any pull requests that include SimpleSchemas that conform to any FHIR Resource or Extension.  

#### Steps to Convert FHIR JSON to SimpleSchema

If you'd like to work on converting FHIR Resources to SimpleSchemas and Meteor packages, here is a short outline of the steps used to create the initial collection of schemas.

0. Copy JSON to file
1. Remove comments
2. Convert "<boolean>" to Boolean
3. Convert subdocuments fields into dotted notation
4. Remove indentation spacing
5. Add {type: {}} structure to each entry
6. Add optional:true
7. Add {meta: {version: ""}}
8. SimpleSchema()
9. JSDoc definition
10. lib/object.js file
11. base object
12. transform function
13. collection definition
14. package.js file


==============================
#### Implementation Sprints  

[Implementation Sprint 1](https://github.com/argonautproject/implementation-program/wiki/Implementation-Sprint-1)  
[Implementation Sprint 2](https://github.com/argonautproject/implementation-program/wiki/Implementation-Sprint-2)
[Implementation Sprint 3](https://github.com/argonautproject/implementation-program/wiki/Implementation-Sprint-3)

==============================
#### Additional Node/Meteor Links

[Node On FHIR](https://github.com/medcafe/NodeOnFHIR)  
[Possible API inspired by mqtt-collection](https://atmospherejs.com/perak/mqtt-collection)  
