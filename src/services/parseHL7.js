// src/services/parseHL7.js

/**
 * parseHL7 - a function to parse HL7-formatted strings and return a structured JavaScript object
 * @param {string} hl7Message - The raw HL7 string.
 * @returns {object} parsedData - The data extracted from HL7.
 */
export function parseHL7(hl7Message) {
    // Step 1: Split by segments
    const segments = hl7Message.split('\r');
  
    // Step 2: Prepare a container for data
    const parsedData = {};
  
    // Step 3: Iterate over segments
    segments.forEach(segment => {
      const fields = segment.split('|');
      const segmentId = fields[0];
      parsedData[segmentId] = fields;
    });
  
    // Step 4: Extract what you need (PID, PV1, IN1, etc.)
    // E.g.:
    const pid = parsedData['PID'];
    if (pid) {
      parsedData.patientId = pid[3];
      // ...
    }
  
    // Return a nicely structured object
    return parsedData;
  }
  