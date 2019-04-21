---
title: shell
category: Linux
layout: 2017/sheet
updated: 2019-04-21
keywords:
    - "shell"
    - "bash"
prism_languages: [bash]
intro: |
  List of bash useful commands 
---

Shortcuts
---------
{: .-one-column}

### Commands

| Create a useless process: | `tail -f /dev/null` |
| Change timezone (Debian based only): | `sudo dpkg-reconfigure tzdata` |
| Copy symlinks: | `cp -a` |
| Remove all Unicode characters from file names: | `for i in *.mp3;do mv "$i" $(echo "$i" | sed -e 's/[^A-Za-z0-9._-]//g');done;` |
| Restoring deleted file from NTFS file system (restoring files from a drive): | `sudo ntfsundelete /dev/sdbx -u -m '*'` |
| Restoring deleted file from NTFS file system (scan a drive): | `sudo ntfsundelete -s /dev/sdx` |
| Check empty directories in the current path: | `for dr in `ls`; do if [ -z "$(ls -A $dr)" ]; then echo "$dr is empty"; fi; done` |
| Sort naturally and one item per line: | `ls -1av` |
| Find lines are not available in file2.txt: | `grep -f file2.txt -vFx file1.txt` |
| Format HTML code: | `tidy -im index.html` |
| Bash go to the begining of a line: | `Ctrl + a` |
|  Bash go to the end of a line: | `Ctrl + e` |
| Bash skip one word backward: | `Ctrl + left arrow key Or Alt + b` |
| Bash skip one word forward: | `Ctrl + right arrow key Or Alt + f` |
| Bash delete to the begining of a line: | `Ctrl + u` |
| Bash delete to the end of a line: | `Ctrl + k` |
| Bash delete to the end of a word: | `Alt + d` |
| Bash reverse search: | `Ctrl + r` |
| Mount flash drive: | `sudo fdisk -l &amp;&amp; udisksctl mount --block-device /dev/sd[b][1]` |
| Connect to WiFi: | `sudo nmtui` |
| Convert tree command output to ASCII characters: | `tree | sed 's/â”œ/\+/g; s/â”€/-/g; s/â””/\\/g'` |
| Epub reader: | `sudo apt install fbreader` |
| Append two pictures horizontally: | `convert +append 1.jpg 2.jpg out.jpg` |
| Append two pictures vertically: | `convert -append 1.jpg 2.jpg out.jpg` |
| Cutting part of a pdf file: | `pdftk input_file.pdf cat 10-20 output output_file.pdf` |
| Install Latex package: | `tlmgr install packageName` |
| Convert Latex file to Pdf: | `pdflatex file.tex` |
| Update locate database index: | `updatedb` |
| Search a file from index of files (fast search): | `locate` |
| Pop the path from stack (change directory) to stack path: | `popd` |
| Push the path to stack: | `pushd $PWD` |
| Processor info: | `cat /proc/cpuinfo` |
| Found distro: | `more /etc/*release` |
| Output command output to clipboard (Ctrl + v): | `ls &gt; xclip -selection clipboard` |
| Output command output to clipboard (middle click): | `ls &gt; xclip` |
| Cancel the planned shutdown: | `shutdown -c` |
| Shutdown in 15 minutes: | `shutdown -h 15` |
| Show add drives with UUID an filesystem: | `blkid` |
| Force scan disk in the next reboot: | `touch /forcefsck` |
| Show hidden file in Nautilus: | `Ctrl + H` |
| Reload .bashrc fine: | `. ~/.bashrc` |
| Which process at the moment using I/O: | `iotop --only` |
| List of process using I/O: | `iotop` |
| Which process using the Internet: | `nethogs` |
| Merge Pdf files: | `pdfunite in.pdf in_1.pdf out.pdf` |
| Access to SAMBA folders: | `/run/user/1000/gvfs` |
| Play subdirectories files in Mplayer: | `mplayer -playlist &lt;(find "$PWD" -type f)` |
| Convert Decimal to Hex &amp; Octal: | `printf "Octal: %o\n Hex: %x" 42 42` | 
| Convert Hex to Decimal: | `echo $((0xFF))` | 
| Install JavaFx OpenJdk: | `sudo apt-get install openjfx` | 
| Install pip3: | `sudo apt-get install python3-pip` | 
| Install pip: | `sudo apt-get install python-pip` |
| Convert .md file to html: | `pandoc README.md &gt; README.html` | 
| Open formatted .md file: | `pandoc README.md | lynx -stdin` | 
| Mv make directory: | `mkdir -P ~/temp; mv File $_` | 
| Search in apt repositories: | `sudo apt-cache search [Keyword]` | 
| Wget download limit, continue, verbose: | `wget -vc --show-progress --limit-rate=200K [link]` | 
| Creat .tar.xz file: | `tar -cvJf [Dot.xz] [Files/Directories]` |
| Extract .tar.xz file: | `tar -xvJf [Dot.xz]` |
| Create .xz file: | `xz -z [A file]` |
| Extract .xz file: | `xz -d [Dot.xz]` |
| Vim selection shortcut: | `v [normal selection], Shift + v [whole line]` |
| Vim cut shortcut: | `d or Shift + d` |
| Vim paste shortcut: | `p [next to cursor], Shift + p [same place cursor]` |
| Vim copy shortcut: | `y or Shift + y` |
| Identifying which port MySQL is running: | `sudo netstat -tlpn | grep mysql` | 
| Automatically indent C/C++ code: | `indent MyCode.c` | 
| Changing/removing passphrase from SSH private key: | `ssh-keygen -f id_dsa -p` | 
| Run command upon SSH: | `ssh test@testserver 'ls &amp;&amp; rm -rvf tmp'` | 
| SSH in reverse tunneling: | `ssh -fN -R 7000:localhost:22 username@yourMachine-ipaddress` | 
| SSH in tunneling: | `ssh -fN -L 7000:localhost:22 username@yourMachine-ipaddress` | 
| SSH in background : | `ssh -f test@testserver` | 
| Grep search string starting with - : | `grep -- "-test"` | 
| List sub directories only : | `ls -d */` | 
| List directory sort by file size : | `ls -S` | 
| List directory with its sub directory contents : | `ls -R` | 
| Run GUI app on a remote PC using SSH : | `export DISPLAY=:0` | 
| Scan computers open ports in a network : | `nmap XXX.YYY.ZZZ.*` | 
| Getting a Heroku app live log : | `heroku logs -t --app APP_NAME` | 
| Counting number of occurence of ';' char in each line of a file : | `while read line; do echo "$line" | tr -cd  ";" | wc -c; done &lt; 'FILE'` |
| Removing space from a file : | `cat FILE | sed 's/ //g'` |
| Randomly shuffling files in bash : | `cat FILE1 FILE2 | shuf` |
| Updating Ubuntu packages in terminal : | `sudo apt-get upgrade` |
| Removing old kernels in Ubuntu : | `sudo apt-get autoremove` |
| Add word prediction to Vim permanently : | `echo set complete+=kspell &gt;&gt; ~/.vimrc` |
| Add permanent spell checking for Vi for .txt files : | `echo autocmd BufRead,BufNewFile *.txt setlocal spell &gt;&gt; ~/.vimrc` |
| Add line number permanently to Vi : | `echo set number &gt;&gt; ~/.vimrc` |
| Find wireless card chipset information : | `lspci | grep -i wireless` |
| Making soft link without giving full path : | `ln -s [$(pwd)/fileName] [des path]` |
| Making soft link : | `ln -s [src path] [des path]` |
| Finding a location of man page : | `man -wa foo` |
| Activating Vim spell checker : | `set spell spellang=en_us` |
| Mounting Virtualbox share folder : | `mount -t vboxsf [Share folder name] [Mount point]` |
| Search for package in Apt : | `apt-cache search [Keyword]` |
| Accessing ssh with key : | `ssh -i [Public key] user@domain` |
| Accessing [new] sftp with key : | `sftp -i [Public key] user@domain` |
| Accessing [old] sftp with key : | `sftp -o IdentityFile=[Public Key] user@domain` |
| Comparing text files : | `vimdiff [File1] [File2]` |
| Sync files (copy) : | `rsync -avh --progress [source] [destination]` |
| Move progress bar : | `rsync -avh --progress --remove-source-files [source] [destination]` |
| Compare pdf files : | `diffpdf` |
| Forward Gnome via SSH : | `ssh -X -C user@192.168.1.1 and gnome-session` |
| Set password for teamviewer from Terminal : | `sudo teamviewer --passwd mypassword` |
| Get your public IP : | `curl ifconfig.me` |
| Console matrix screen saver : | `cmatrix` |
| Printing something constantly : | `yes say hello` |
| Reverse word : | `rev` |
| Extract the sentence after particular word and replace with comma, sort and remove duplicate values : | `less Mylog.txt | grep -o 'world.*' | cut -f2- -d':' | tr -s ',' '\n' | sort | uniq` |
| Replace comma with new line : | `less Mylog.txt | tr -s ',' '\n'` |
| Extract the sentence after particular word in a file : | `less Mylog.txt | grep -o "word.*" | cut -f2- -d':'` |
| Knowing who is logged in : | `sudo w` |
| Getting the last system reboot : | `sudo last reboot` |
| Getting the ip of the hostname : | `sudo hostname -i` |
| Getting the system hostname : | `sudo hostname` |
| Getting the system uptime : | `sudo uptime` |
| Giving ownership of a file to a user : | `sudo chown Username FileName` |
| Adding user to a group : | `sudo useradd -G G-Name Username` |
| Removing vocal from song : | `sox 1.mp3 1_no_vocal.mp3 oops` |
| Gray Scaling picture : | `convert IMAGE.png -colorspace Gray IMAGE1.png` |
| Resizing picture : | `convert IMAGE.png -resize 200x100 IMAGE1.png` |
| Sorting &amp; getting unique values of 31th column of a CSV file : | `awk -F ',' '{print $31}' FILE.csv | sort | uniq` |
| Sorting 31th column of a CSV file : | `awk -F ',' '{print $31}' FILE.csv | sort` |
| Filtering 3rd and 31th columns of a CSV file based on a string : | `awk -F ',' '{print $6, $31}' FILE.csv | grep 'STRING'` |
| Getting 3rd and 31th columns from a CSV file : | `awk -F ',' '{print $6, $31}' FILE.csv` |
| Getting number of columns of a CSV file : | `head -1 FILE.csv | sed 's/[^,]//g' | wc -c` |
| Discover hosts and services on a computer network : | `nmap 192.168.0.1` |
| Getting number of files in a folder : | `ls -l | wc -l` |
| Checking niceness of a comand : | `nice` |
| An interactive process manager : | `htop` |
| Create a directory on specific path : | `mkdir -p /home/kasra/test` |    
| Getting directory size : | `du -sh` |
| Command line calander : | `cal` |
| Showing last K line of file : | `tail 1.txt -n K` |
| Showing first K line of file : | `head 1.txt -n K` |
| Monitor file updates/change : | `tail -f 1.txt` |
| Looking for a file : | `find / -name foo` |
| Sort lines of text files : | `sort 1.txt` |
| Sort lines of text files : | `sort 1.txt` |
| Execute command after exit Shell : | `nohup command-name &amp;` |
| Counting number of <strong>line</strong> in a file : | `wc -l FileName` |
| Counting number of <strong>word</strong> in a file : | `wc -w FileName` |
| Counting number of <strong>character</strong> in a file : | `wc -m FileName` |
| Initializing the console again : | `reset` |
| Getting full path of a file : | `realpath 1.txt` |
| Create arguments for commands : | `xrags` |
| Update access and modification date of files without opening : | `touch 1.txt` |
| Sticky note : | `sudo apt-get install xpad` |
| CLI note : | `sudo apt-get install note` |
| Change default editor for Crontab : | `sudo select-editor` |
| Crontab log file : | `grep CRON /var/log/syslog` |
| Writing in a multiple files at same time : | `ls | tee f1.txt f2.txt` |
| Play noise with output of a command : | `ls | aplay` |
| Print the route packets trace to network host : | `traceroute google.com` |
| Display manual page descriptions : | `whatis ls` |
| Historical events calendar : | `calendar` |
| Getting content of a file sorted : | `sort f1.txtr` |
| Running sudo command without entering password : | `echo "rootPassword" | sudo -S mkdir /root/test123` |
| Executing multiple commands with sudo : | `sudo -- sh -c 'rm -rvf /root/test123; whoami; mkdir /root/tpx'` |
| Shutdown pc : | `shutdown -h now` |
| Getting kernel version : | `uname -r` |
| Getting distro &amp; release version : | `lsb_release -a` |
| Getting a website ip address : | `nslookup www.google.com` |
| Getting a domain information : | `whois www.google.com` |