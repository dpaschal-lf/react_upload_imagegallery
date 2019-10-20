# file upload / gallery / modal example

instructions
- clone repo
- npm install from main folder
- npm start
- click on file upload button
- select a file

![example image](fileupload_gallery.gif)

### common causes for problems
- file too big: your php.ini will need upload_max_filesize and post_max_size to a larger size.  See [here](https://www.a2hosting.com/kb/developer-corner/php/using-php.ini-directives/php-maximum-upload-file-size) for more details.
- upload directory is unwritable.  To find out how to make your directory writable, check out these resources
    - [windows](https://www.online-tech-tips.com/computer-tips/set-file-folder-permissions-windows/)
    - [mac](https://stackoverflow.com/questions/1070216/how-can-i-make-directory-writable/1070326)
    - [linux (ubuntu)](https://tecadmin.net/change-permissions-on-folder-and-sub-folders-recursively/)