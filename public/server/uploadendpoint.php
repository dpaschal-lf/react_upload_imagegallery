<?php

    function handleException($error){
        http_response_code(500);
        die(json_encode(['error'=>$error->getMessage()]));
    }
    set_exception_handler('handleException');
    header("Access-Control-Allow-Origin: *");
    $uploadDirectory = 'uploads/';
    $uploadedFiles = [];
    if(count($_FILES)!==0){
        foreach($_FILES as $fileToUpload){
            $acceptableFileExtensions = ['jpg','jpeg','gif','png'];
            $filePathInfo = pathinfo($fileToUpload['name']);
            if(!in_array($filePathInfo['extension'], $acceptableFileExtensions)){
                throw new Exception("{$fileToUpload['name']} is an invalid file type.  Can only accept jpg/jpeg, gif, and png");
            }
            if(move_uploaded_file($fileToUpload['tmp_name'], $uploadDirectory . $fileToUpload['name'])){
                $uploadFiles[] = $fileToUpload['name'];
            } else {
                throw new Exception('failed to save '.$fileToUpload['name']);
            }
        }
    }

    //chdir('uploads');
    $filesInDirectory = glob('uploads/*');
    $imagesInDirectory = [];
    foreach($filesInDirectory as $thisFile){
        if($thisFile !== '.' && $thisFile !== '..'){
            $imagesInDirectory[] = $thisFile;
        }
    }
    print( json_encode([
        'uploadedFiles'=>$uploadedFiles,
        'currentFiles'=>$imagesInDirectory
    ]));
?>