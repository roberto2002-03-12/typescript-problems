type JSONValue = null | boolean | number | string | JSONValue[] | { [key: string]: JSONValue };
type FnT = (...args: JSONValue[]) => void

// function cancellable(fn: FnT, args: JSONValue[], t: number): Function {
//   const result: any[] = [];

//   var cancelTimeMs;

//   const startTime = new Date().getTime();

//   const log = (...argsArr: any) => {
//     result.push('{"time"}: ' + (new Date().getTime() - startTime) + ', "returned": ' + fn(...args) + '}');
//   }

//   const cancel = cancellable(log, args, t);

//   setTimeout(() => {
//     cancel()
//     console.log(result);
//   }, cancelTimeMs);
// };

function cancellable(fn: FnT, args: JSONValue[], t: number): Function {
  // variables
  const result = [];
  let cancelTimeMs: number = 190;
  const startTime = new Date().getTime();

  const interval = setInterval(() => {
    fn(...args);
    console.log(`'{"time": ${new Date().getTime() - startTime}, "returned": ${fn(...args)}}'`);
  }, t);

  const cancelFn = () => clearInterval(interval)

  setTimeout(cancelFn, cancelTimeMs)

  return cancelFn;
};

cancellable((x: any) => x * 2, [4], 35);

/**
const result = []

const fn = (x) => x * 2
const args = [4], t = 20, cancelT = 110

const startTime = new Date().getTime()

const log = (...argsArr) => {    
    result.push('{"time": ' +
          (new Date().getTime() - startTime) + 
          ', "returned": ' +
          fn(...argsArr) + '}');
}
     
const cancel = cancellable(log, args, t);
         
setTimeout(() => {
   cancel()
   console.log(result) // [
                       //      {"time":0,"returned":8},
                       //      {"time":20,"returned":8},
                       //      {"time":40,"returned":8},           
                       //      {"time":60,"returned":8},
                       //      {"time":80,"returned":8},
                       //      {"time":100,"returned":8}
                       //  ]
}, cancelT)
 */