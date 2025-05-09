import { moneytrack,description,amount,totalIncome,totExpense, isExpenseAllowed} from "../js/script";



describe('[moneytrack]', () => {
    test('should be defined', () => { 
        expect(moneytrack).toBeDefined()
     })

     test('should be an array', () => { 
        expect(Array.isArray(moneytrack)).toBe(true)
     })
    
});

describe('[isExpenseAllowed]', () => { 
    test('should be a function', () => { 
        expect(typeof isExpenseAllowed).toBe("function");
    
    });

    test('should throw an error if expense exceeds balance', () => {
        const totalIncome = 100;
        const totalExpense = 0;
        const newExpense = 150;

        expect(() => isExpenseAllowed(newExpense, totalIncome, totalExpense)).toThrow('You have insufficient amount.');
    });
});



describe('[description]', () => {
    test('should be a function', () => {  
        expect(typeof description).toBe("function")
    })
     
    test('description should not be empty', () => { 
        expect(() => description('  ')).toThrow('Description cannot be empty');
    })

    test('it should only accept a string', () => { 
        expect(()=>description(val).toThrow())
    })

    test('parameter should contain at least 3 characters', () => { 
        let val ="sa"
        expect(()=>description(val)).toThrow();
    })

    
});

describe('[amount]', () => {
    test('should be a function', () => {
      expect(typeof amount).toBe("function");
    });
  
  
    test('should throw if value is undefined', () => {
      const value = undefined;
      expect(() => amount(value)).toThrow("You need to input the value");
    });
  
    test('should throw if value is null', () => {
      const value = null;
      expect(() => amount(value)).toThrow("You need to input the value");
    });
  
    test('should throw if value is negative', () => {
        const value = -10;
        expect(() => amount(value)).toThrow(); 
      });
      test('should throw if no value is provided ', () => {
          expect(() => amount('')).toThrow("You need to input the value");
        });


      });
      

describe('[totalIncome]', () => {
    test('should be a function', () => { 
        expect(typeof totalIncome ).toBe("function")
    }) 
    
    
});

describe('[totExpense]', () => {
    test('should be a functiom', () => { 
        expect(typeof totExpense).toBe("function")
    })  
});

