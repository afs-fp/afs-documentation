export const parseLength = (input: string) => {
    // Clean input: remove unwanted characters but keep quotes, digits, decimal points, spaces, and hyphens
    const sanitizedInput = input.replace(/[^0-9.'"-\s]/g, '').trim();
  
    // Updated regex pattern to match feet and inches with optional decimals or trailing period for inches
    const regex = /^(\d+(?:\.\d+)?)(?:['\s-]*\s*(\d+(?:\.\d*)?))?["']?$/;
    const match = sanitizedInput.match(regex);
  
    if (match) {
      let feet = 0;
      let inches = 0;
  
      if (sanitizedInput.endsWith('"') && !sanitizedInput.includes("'")) {
        // If it ends with double-quote and there's no single quote, treat as inches only
        inches = parseFloat(match[1]) || 0;
      } else {
        // Otherwise, treat the first number as feet and the second as inches (if available)
        if (match[1]) {
          feet = parseFloat(match[1]) || 0;
        }
        if (match[2]) {
          inches = parseFloat(match[2]) || 0;
        }
      }
  
      // Convert feet to inches and add the inches part
      return feet * 12 + inches;
    }
  
    return null;
  };
  