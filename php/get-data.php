<?php

/* Include the Billogram API library */
use Billogram\Api as BillogramAPI;
use Billogram\Api\Exceptions\ObjectNotFoundError;

/* Sample autoloader function for PHP. For most applications, you usually
   already have one of these registered.
*/
function autoload($className)
{
    $className = ltrim($className, '\\');
    $fileName  = '';
    $namespace = '';
    if ($lastNsPos = strrpos($className, '\\')) {
        $namespace = substr($className, 0, $lastNsPos);
        $className = substr($className, $lastNsPos + 1);
        $fileName  = str_replace('\\', DIRECTORY_SEPARATOR, $namespace) .
            DIRECTORY_SEPARATOR;
    }
    $fileName .= str_replace('_', DIRECTORY_SEPARATOR, $className) . '.php';
    $fileName = "../".$fileName;
    require $fileName;

}
spl_autoload_register('autoload');


/* Load an instance of the Billogram API library using your API ID and
   API password. You can also pass an app identifier for better debugging.
   For testing you will most likely also use another API base url. */
$apiId = '8654-ACNesPJL';
$apiPassword = 'f8c38af0fdd0c376e2783fda5889d7a0';
$identifier = 'Joelbi is building';
$apiBaseUrl = 'https://billogram.com/api/v2';
$api = new BillogramAPI($apiId, $apiPassword, $identifier, $apiBaseUrl);


/* Fetch all billograms for the specified month*/
$billogramQuery = $api->billogram->query()->order('due_date','asc');
$billogramArray = $billogramQuery->getPage(1);

/* Creates an array with the desired information */
$invoices = array();
foreach ($billogramArray as $billogramSpec) {
	$theData = $billogramSpec->data;
	$invoiceData = array(
		'invoice_no' => $theData['invoice_no'],
		'customer_name' => $theData['customer']->name,
		'due_date' => $theData['due_date'],
		'total_sum' => $theData['total_sum'],
		'state' => $theData['state']
	);	
	
	array_push($invoices, $invoiceData);
}

/* Returns the json object */
echo json_encode($invoices, JSON_FORCE_OBJECT);



/* Helper function for testing */
function arrayAndObjectsToString($arrOb) {
	if(is_array($arrOb)) {
		echo "ARRAY<br/>[<br/>";
		foreach ($arrOb as $key) {
			if(is_array($key) || is_object($key)) {
				arrayAndObjectsToString($key);
			}
			else {
				echo $key . "<br/>";
			}
		}
		echo "]<br/>";
	}
	elseif(is_object($arrOb)) {
		echo "OBJECT<br/>{<br/>";
		foreach ($arrOb as $key => $value) {
			if(is_array($value) || is_object($value)) {
				arrayAndObjectsToString($value);
			}
			else {
				echo $key . ": " . $value . "<br/>";
			}
		}
		echo "}<br/>";
	}
	else {
		echo $arrOb . "<br/>";
	}
}





?>