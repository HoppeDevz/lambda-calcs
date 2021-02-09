const lambda = require("./lambda");

let _true = lambda.t;
let _false = lambda.f;

lambda.print( "not _true: ", lambda.not(_true) ) // [Function last] = false;
lambda.print( "not _false: ", lambda.not(_false) ) // [Function pri] = true;

lambda.print( "_true and _true", lambda.and(_true)(_true) ) // [Function pri] = true;
lambda.print( "_false and _false", lambda.and(_false)(_false) ) // [Function last] = false;

lambda.print( "_true or _true", lambda.or(_true)(_true) ) // [Function pri] = true;
lambda.print( "_true or _false", lambda.or(_true)(_false) ) // [Function pri] = true;
lambda.print( "_false or _false", lambda.or(_false)(_false) ) // [Function last] = false;