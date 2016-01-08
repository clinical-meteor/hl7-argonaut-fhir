

/**
 * @summary Represents a Patient; typically documented by a clinician.  A Clinical Impression can be self-assigned, in which case it may be considered a Status or ReportedCondition.  
 * @class Patient
 * @param {Object} document An object representing an impression, ususally a Mongo document.
 * @example 
newPatient = new Patient({
  name: {
    given: "Jane", 
    family: "Doe"
  },
  gender: "female",
  identifier: "12345"
});


newPatient.clean();
newPatient.validate();
newPatient.save();
 */
 

// create the object using our BaseModel
Patient = BaseModel.extend();


//Assign a collection so the object knows how to perform CRUD operations
Patient.prototype._collection = HL7.Resources.Patients;

// Create a persistent data store for addresses to be stored.
HL7.Resources.Patients = new Mongo.Collection('HL7.Resources.Patients');

//Add the transform to the collection since Meteor.users is pre-defined by the accounts package
HL7.Resources.Patients._transform = function (document) {
  return new Patient(document);
};


SequenceSchema = new SimpleSchema({
  "resourceType" : {
    type: String,
    defaultValue : "Sequence"
  },
  "variationID" : {
    type : [{ CodeableConcept }]
    },
  "referenceSeq" : {
    type : CodeableConcept 
    }, 
  "quantity" : {
    type : Quantity 
    }, 
  "coordinate.$.chromosome" : {
    type : CodeableConcept 
    }, 
  "coordinate.$.start" : {
    type : Integer
    },
  "coordinate.$.end" : {
    type : Integer
    },
  "coordinate.$.genomeBuild" : {
    type : CodeableConcept 
    } 
  "species" : {
    type : CodeableConcept 
    }, 
  "observedAllele" : {
    type : String
    },
  "referenceAllele" : {
    type : String
    },
  "cigar" : {
    type : String
    },
  "quality.$.start" : {
    type : Integer
    },
  "quality.$.end" : {
    type : Integer
    },
  "quality.$.score" : {
    type : Quantity 
    }, 
  "quality.$.platform" : {
    type : CodeableConcept 
    } 
  "allelicState" : {
    type : CodeableConcept 
    }, 
  "allelicFrequency" : {
    type : Decimal
    },
  "copyNumberEvent" : { 
    type :CodeableConcept 
    }, 
  "readCoverage" : {
    type : Integer
    },
  "chip.chipId" : {
    type : String
    },
  "chip.manufacturerId" : {
    type : String
    },
  "chip.version" : {
    type : String
    },
  "repository.$.url" : {
    type : String
    },
  "repository.$.name" : {
    type : String
    },
  "repository.$.structure" : {
    type : String
    },
  "repository.$.variantId" : {
    type : String
    },
  "repository.$.readGroupSetId" : {
    type : String
    }
});




//================================================================





/**
 * @summary The displayed name of the patient.
 * @memberOf Patient
 * @name displayName
 * @version 1.2.3
 * @returns {Boolean} 
 * @example
 * ```js
 * ```
 */

Patient.prototype.displayName = function () {
  
};

