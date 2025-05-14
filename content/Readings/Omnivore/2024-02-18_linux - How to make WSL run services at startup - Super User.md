---
id: c36c463a-63ee-4466-9d6d-51e01d64903e
title: |
  linux - How to make WSL run services at startup - Super User
author: |
  seanbw
date_saved: 2024-02-18 14:04:38
date_published: 2023-07-05 05:09:36
draft: true
---

# linux - How to make WSL run services at startup - Super User
#Omnivore

[Read on Omnivore](https://omnivore.app/me/linux-how-to-make-wsl-run-services-at-startup-super-user-18dbd9b2488)

[Read Original](https://superuser.com/questions/1343558/how-to-make-wsl-run-services-at-startup)

date_saved: 2024-02-18 14:04:38

date_published: 2023-07-05 05:09:36

--- 

# Full Content: 

After searching this site and various Q, it is clear that services and `systemd` is not available for WSL. I need to run a program in WSL every time I start my PC so I read this page on how to use crontab: [How to run Ubuntu service on Windows (at startup)?](https://superuser.com/questions/1112007/how-to-run-ubuntu-service-on-windows-at-startup|) Super User but I got confused because the format does not tally with the format in crontab. 

In addition, that particular question was specific for SSH servers which requires that the security aspect if considered and dealth with resulting in overcomplication of steps. Irrespective, the steps explored in that qusetion have been tried and they did not work. In addition, that question is highly specific to SSH servers whilst this question deals with a general enviromental requirement i. I need to know HOW to run services in WSL (which may include but is not limited to SSH serrvers)

In effect - A more simplified solution is required than [How to run Ubuntu service on Windows (at startup)?](https://superuser.com/questions/1112007/how-to-run-ubuntu-service-on-windows-at-startup) provides.

However this is my cron:

```elixir
PATH=/usr/local/sbin:/usr/local/bin:/sbin:/bin:/usr/sbin:/usr/bin
PATH=cd /usr/local/src/:cd xmr-stak-cpu:cd bin/
@reboot . sudo ./xmr-stak-cpu

```

I have also done this:

Run bash/cron loop on start

Create a file called linux.bat in shell:startup 

```fsharp
Paste: C:\Windows\System32\bash.exe -c 'while [ true ]; do sudo /usr/sbin/cron -f; done'

```

It does not work.

How can I run a service in WSL? Or is there a way to use Windows?

Because in Windows I have tried the following: using <https://github.com/Microsoft/WSL/issues/612>

```groovy
Run: When the computer starts, 
Action: Start a program, 
Program: c:\Windows\system32\bash.exe, 
Arguments: -c "sudo  /xmr-stak-cpu/bin/xmr-stak-cpu -D"
Start in:  /usr/local/src/

```

And as you guessed, it still does not work. Frankly I wish I could do this in WSL because it is my preferred way but I will take any way. 

I have a workstation with 96GB RAM and as such I will prefer to use this as the dual Linux/Windows machine and not my puny laptop. 

I have tasks on both Linux and Windows and really need/prefer the Linux solution provided by Windows. 

I have reviewed the other question and there is a package called Mysys that seems to provide a solution however this departs from the integration provided by Microsoft which was a great way forward.

[slhck](https://superuser.com/users/48078/slhck)

227k71 gold badges614 silver badges601 bronze badges 

 asked Jul 26, 2018 at 15:24 

3

My example with mysql service

1. Create line in `/etc/sudoers` (at WSL to prevent asking password):  
```routeros  
 %sudo   ALL=(ALL) NOPASSWD: /usr/sbin/service mysql start  
```
2. Create `.bat` file in Windows startup directory with this line (dir find here: Win+R and `shell:startup`):  
```routeros  
 wsl sudo service mysql start  
```

After restarting the service, it will start automatically.

[glibg10b](https://superuser.com/users/1095089/glibg10b)

2191 silver badge12 bronze badges 

 answered Jan 5, 2020 at 0:36 

[user1126880](https://superuser.com/users/1126880/user1126880)user1126880

5214 silver badges2 bronze badges 

8

_Update: WSL now includes the ability to enable Systemd, which can (as the original question asked) obviously be used to run services when a WSL distribution starts. However, if that's your only reason for needing Systemd, the answer below may be a better option, as it avoids the additional overhead and complexity of Systemd_

With the release of Windows 11, a new feature has been added to WSL to address this. This feature is now also available to Windows 10 users if you install [WSL from the Microsoft Store](https://aka.ms/wslstorepage) (requires [KB5020030](https://support.microsoft.com/en-gb/topic/november-15-2022-kb5020030-os-builds-19042-2311-19043-2311-19044-2311-and-19045-2311-preview-237a9048-f853-4e29-a3a2-62efdbea95e2), which should be available under _Optional Updates_).

To run any arbitrary command when WSL starts, create or edit (as `sudo`) `/etc/wsl.conf` with the following contents:

```applescript
[boot]
command = <command to run as root>; <other command to run as root>

```

If you run a service using this method (e.g. `cron` or `sshd`) please note that the WSL distribution will still auto-terminate when the last process that was started _interactively_ completes. You can see more discussion (and a workaround using `keychain`) for this in my answer to the Ask Ubuntu question [Is it possible to run a WSL app in the background?](https://askubuntu.com/q/1435938/1165986).

For instance:

```ini
[boot]
command="service ssh start; service cron start"

```

These commands run as root, so no need to use `sudo` with a password.

Note that (currently, at least) if you attempt have multiple `command=` lines, only the _last_ will be executed. If you need multiple commands to run at boot, separate them with a semicolon as above.

If you need these services to start at _Windows_ login, simply create a scheduled task at login for `wsl true`. This will start your WSL instance, triggering the `boot` commands above.

 answered Nov 2, 2021 at 20:55 

[NotTheDr01ds](https://superuser.com/users/1210833/notthedr01ds)NotTheDr01ds

20.9k5 gold badges56 silver badges95 bronze badges 

3

In WSL, the linux distributions run only after a first linux command is invoked. If you wanna run a linux deamon (a service) you must configure the server in linux and run any command in that linux distribution.

There are many pages and answers that show [how to create a script to start a WSL linux when your computer starts](https://superuser.com/questions/1112007/how-to-run-ubuntu-service-on-windows-at-startup?noredirect=1&lq=1).

* There is a [wsl-autostart VBS script](https://github.com/troytse/wsl-autostart) that you can use. You can install the script and change the `commands.txt` with custom linux commands.
* There is a [step by step tutorial](https://gist.github.com/dentechy/de2be62b55cfd234681921d5a8b6be11) to start automatically an ssh server on WSL.
* There are also options to create policies to run the program as an initial tasks (using the `gpedit.msc` command) or a scheduled task that run at startup (using the `taskschd.msc`).

---

**NOTE:** If your program must be executed with `sudo`, you must configure it to start the program without asking a password.

* Run `visudo` in the linux and add a line at the end of the file: `%sudo ALL=NOPASSWD: /full/path/to/program`

 answered Jul 29, 2018 at 2:42 

[Jaime](https://superuser.com/users/756164/jaime)Jaime

2,17921 silver badges20 bronze badges 

2

Another option:

### 1) Create a startup file in Linux at `/etc/init-wsl`:

```bash
#!/bin/sh
echo booting
service ssh start

```

and make the script executable

`chmod +x /etc/init-wsl`

### 2) Schedule executing this file at windows boot or log on

[![test](https://proxy-prod.omnivore-image-cache.app/0x0,shJUwNegnIfUMc0oBIMqSHg-iMyP6v_zoabMmAGLwoyw/https://i.stack.imgur.com/hdF1a.png)](https://i.stack.imgur.com/hdF1a.png)

Since `wsl.exe` is able to run commands inside the wsl distro, we simply schedule to run this file through the command `wsl -u root /etc/init-wsl`. If you have multiple distros, you might want to specify which one with a `-d` flag, for instance `wsl -d Ubuntu-20.04 -u root /etc/init-wsl`

 answered Mar 21, 2021 at 12:52 

1

Thank you for your question, it guided me towards this solution. This is my complete, generalized- and particular solution. It consist of 3 steps:

1. Create a cronjob
2. Run/enable the cronjob service at startup
3. Remove prompting for password to start the cronjob service automatically.

In reality your problem is already solved with just step 2 and 3, but since you tried to do it with a cronjob, I also added that step for completeness.

**1\. Creating a functioning cronjob:**

1. Browse to folder `/etc/`
2. Then in folder `/etc/` enter:`sudo nano crontab`
3. In that file named crontab enter your command.
4. E.g.: `*/1 * * * * root touch /var/www/myFile`
5. To create a file named `myFile` in location `/var/www/` every minute.
6. For completeness: `*/1 * * * * root touch /var/www/myFile` would mean: create that file every 1st minute of the hour.

An example of the `crontab` file could look like (I only added the last line, the rest was already there in my setup): 

```elixir
# /etc/crontab: system-wide crontab
# Unlike any other crontab you don't have to run the `crontab'
# command to install the new version when you edit this file
# and files in /etc/cron.d. These files also have username fields,
# that none of the other crontabs do.

SHELL=/bin/sh
PATH=/usr/local/sbin:/usr/local/bin:/sbin:/bin:/usr/sbin:/usr/bin

# m h dom mon dow user  command
*/2 * * * * root touch /var/www/myFile

```

**2\. Enabling cronjob service**

To run a command automatically at startup of WSL Ubuntu 16.04 you can:

1. cd to `/home/<your ubuntu user name>`
2. `sudo nano .bashrc`
3. The text editor nano then creates/opens a file `.bashrc`
4. In that file a lot of examples can be shown already, to just execute your command upon startup of the WSL ubuntu 16.04, write your command on the first line of the `.bashrc` file.
5. For example:`echo "hello world"` as shown in the picture below.
6. _For your particular problem, the particular solution would be to enter the line:`sudo ./xmr-stak-cpu`_
7. Close the editor with: `ctrl+x`
8. Save the file with `Y`
9. Exit ubuntu
10. Restart ubuntu and verify indeed the hello world is printed before your username.

[!\[An example command in .bashrc that is executed upon boot of WSL ubuntu.\]](https://i.stack.imgur.com/7rn3J.png)[1](https://i.stack.imgur.com/7rn3J.png)

For example this could be what your `.bashrc` looks like after you edited it: (I only added the first line on top, the rest was already there in my setup.)

```routeros
sudo -i service cron start
# ~/.bashrc: executed by bash(1) for non-login shells.
# see /usr/share/doc/bash/examples/startup-files (in the package bash-doc)
# for examples

# If not running interactively, don't do anything
case $- in
    *i*) ;;
      *) return;;
esac

# don't put duplicate lines or lines starting with space in the history.
# See bash(1) for more options
HISTCONTROL=ignoreboth

# append to the history file, don't overwrite it
shopt -s histappend

# for setting history length see HISTSIZE and HISTFILESIZE in bash(1)
HISTSIZE=1000
HISTFILESIZE=2000

# check the window size after each command and, if necessary,
# update the values of LINES and COLUMNS.
shopt -s checkwinsize

# If set, the pattern "**" used in a pathname expansion context will
# match all files and zero or more directories and subdirectories.
#shopt -s globstar

# make less more friendly for non-text input files, see lesspipe(1)
[ -x /usr/bin/lesspipe ] && eval "$(SHELL=/bin/sh lesspipe)"

# set variable identifying the chroot you work in (used in the prompt below)
if [ -z "${debian_chroot:-}" ] && [ -r /etc/debian_chroot ]; then
    debian_chroot=$(cat /etc/debian_chroot)
fi

# set a fancy prompt (non-color, unless we know we "want" color)
case "$TERM" in
    xterm-color|*-256color) color_prompt=yes;;
esac

# uncomment for a colored prompt, if the terminal has the capability; turned
# off by default to not distract the user: the focus in a terminal window
# should be on the output of commands, not on the prompt
#force_color_prompt=yes

if [ -n "$force_color_prompt" ]; then
    if [ -x /usr/bin/tput ] && tput setaf 1 >&/dev/null; then
        # We have color support; assume it's compliant with Ecma-48
        # (ISO/IEC-6429). (Lack of such support is extremely rare, and such
        # a case would tend to support setf rather than setaf.)
        color_prompt=yes
    else
        color_prompt=
    fi
fi

```

You can replace the `hello world`command with `sudo service cron start` to enable cronjob service. However then you are still required to enter your password manually. 

**3\. Removing prompt for password:**Using: <https://askubuntu.com/questions/147241/execute-sudo-without-password>

1. Open WSL ubuntu 16.04 (terminal)
2. `sudo visudo`
3. At the bottom of the file add line:`<your WSL ubuntu username> ALL=(ALL) NOPASSWD: ALL`
4. E.g with username zq you would add the following line to the bottom of the file:
5. `zq ALL=(ALL) NOPASSWD: ALL`
6. ctrl+x to exit
7. `y` followed by `<enter>` to save.
8. Then again, close ubuntu and re-open it and verify
9. The cron service is running automatically when you boot/open WSL ubuntu 16.04 without prompting for password.
10. (you can check with command: `sudo service cron status`.)

The code to prevent prompting for password at boot would for example look like (I only added the last line, the rest was already there in my setup):

```nix
#
# This file MUST be edited with the 'visudo' command as root.
#
# Please consider adding local content in /etc/sudoers.d/ instead of
# directly modifying this file.
#
# See the man page for details on how to write a sudoers file.
#
Defaults        env_reset
Defaults        mail_badpass
Defaults        secure_path="/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin:/s$
# Host alias specification

# User alias specification

# Cmnd alias specification

# User privilege specification
root    ALL=(ALL:ALL) ALL

# Members of the admin group may gain root privileges
%admin ALL=(ALL) ALL

# Allow members of group sudo to execute any command
%sudo   ALL=(ALL:ALL) ALL

# See sudoers(5) for more information on "#include" directives:

#includedir /etc/sudoers.d
%sudo ALL=NOPASSWD: /etc/init.d/cron
zq ALL=(ALL) NOPASSWD: ALL

```

Working towards this solution, I learned cronjobs are intended for things to run periodically rather than at specific events such as startup. To run things at startup in WSL you can use the file `/home/<username>/.bashrc`.

 answered Oct 11, 2018 at 17:38 

[a.t.](https://superuser.com/users/809273/a-t)a.t.

3931 gold badge7 silver badges28 bronze badges 

4

As far as I see, all solutions here run just the moment, the user logs in. This might not exactly match the need `as windows starts`. Just to mention: You might also use the windows task planner for execution of jobs by a given trigger. Maybe you just wanna give it a try.  
**But now the news solution, which I use on my self**: With the software [Non sucking service manager](http://nssm.cc/) you can run any program as a windows service. With that, I wrapped the startup of `jupyter-notebook` within WSL2 (also worked fine in WSL1) as a service while starting up the computer, without loggin in - in the context of a user.

If you like, have a look at the following dumped commands as an example. But do not fear, you can also use a GUI.

```routeros
nssm.exe install Jupyter c:\Windows\System32\wsl.exe
nssm.exe set Jupyter AppParameters "--distribution Debian --exec jupyter-notebook --no-browser --NotebookApp.token=''  --NotebookApp.disable_check_xsrf=True"
nssm.exe set Jupyter AppDirectory C:\Users\USER\jupyter
nssm.exe set Jupyter AppExit Default Restart
nssm.exe set Jupyter AppNoConsole 1
nssm.exe set Jupyter AppPriority IDLE_PRIORITY_CLASS
nssm.exe set Jupyter AppStdout C:\Users\USER\.jupyter\jupyter.stdout
nssm.exe set Jupyter AppStderr C:\Users\USER\.jupyter\jupyter.stderr
nssm.exe set Jupyter AppRotateFiles 1
nssm.exe set Jupyter AppRotateOnline 1
nssm.exe set Jupyter AppTimestampLog 1
nssm.exe set Jupyter DisplayName Jupyter
nssm.exe set Jupyter Start SERVICE_DELAYED_AUTO_START
nssm.exe set Jupyter Type SERVICE_WIN32_OWN_PROCESS

```

As you see, also LogFile creation and rotation is possible.

 answered May 6, 2020 at 17:23 

[Bastian Ebeling](https://superuser.com/users/70718/bastian-ebeling)Bastian Ebeling

2611 gold badge5 silver badges14 bronze badges 

Download this -> <https://github.com/troytse/wsl-autostart>

And instead of following the instructions to set up in the registry/group policy/taskschd, just drop a shortcut for `start.vbs` in your startup folder: 

`"C:\Users\%USERNAME%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup"`

Or the system startup folder

`"C:\ProgramData\Microsoft\Windows\Start Menu\Programs\StartUp"`

Works great!

 answered May 18, 2019 at 11:08 

The solution making changes only inside of WSL distro, allowing you to get services started(if they haven't been started yet) each time you launch your shell:

1. (taken from [wsl-autostart](https://github.com/troytse/wsl-autostart)) Edit `/etc/sudoers`: Find the part of the text under `# Allow members of group sudo to execute any command`comment and insert the following line(-s) in the end there:  
`%sudo ALL=NOPASSWD: /etc/init.d/<service name>` \- for each service
2. Edit `~/.bashrc` or `~/.zshrc` or whatever else (depending on the shell you use), add line(-s):  
`ps -C <service name> &> /dev/null || sudo /etc/init.d/<service name> start &> /dev/null` \- for each service  
Check it carefully as `<service name>` in the first and the second parts of the expression can differ.

Hope that this solution will fit your needs. Thank you.

 answered Jun 12, 2020 at 12:42 

This consists of two important steps:

**1) Disable password prompt in for sudo in WSL (under WSL)**

```apache
sudo visudo
#add at the bottom
yourUserName ALL=(ALL) NOPASSWD: ALL

```

**2) Task Scheduler/`taskschd.msc` (under Windows)**

Create a basic task to run at windows startup with as many commands in the following form:

```routeros
wsl sudo service ssh start
wsl sudo service nginx start
#...etc.

```

[Abdull](https://superuser.com/users/137881/abdull)

2,1144 gold badges19 silver badges26 bronze badges 

 answered Nov 30, 2020 at 14:13 

1

systemd on startup is now supported (WSL2, Windows 11) - add the following to your `/etc/wsl.conf`:

```ini
[boot]
systemd = true

```

 answered Oct 28, 2022 at 17:37 

1

Noticed the same. Have to start my corn, nginx, mysql, elasticsearch etc. etc. manually after every reboot. It's because `systemd` is not supported on WSL. I am currently using WSL 2.

My simple solution to this is a bash script to start all the services one after another

For example `start_services.sh` (all in a single line with `;` at last):

```routeros
sudo service cron start ; sudo service php7.4-fpm start ; sudo service elasticsearch start ; sudo service mysql start ; sudo service nginx start ;

```

Similarly, I have other scripts `to restart` and `to stop` the services.

 answered Oct 13, 2020 at 16:52 

Since the introduction of the \[boot\] section in the wsl.conf file, this has gotten dramatically easier. You can run systemd, but if you don't need the power of it, you can also run an old-school /etc/rc system. It's compatible with /etc/init.d, and while you can't get it to behave properly with runlevels (since they don't exist on WSL), you _can_ use the /etc/rc file as a boot script.

Add the following two files and restart your wsl instance, and your init.d scripts will now work automatically. Newly installed services will behave properly as well.

/etc/wsl.conf

```ini
[boot]
command="/etc/rc"

```

/etc/rc

```bash
#!/bin/sh

# Start system services
for i in /etc/rc3.d/S*; do
  if [ -x $i ]; then
    $i start
  fi
done

# Run /etc/rc.local if it exists
if [ -x /etc/rc.local ] ; then
  /etc/rc.local
fi

```

 answered Mar 22, 2023 at 20:01 

This is more of a comment to the [answer by @NotTheDr01ds](https://superuser.com/a/1685207/691040), but I don't how enough reputation yet to comment.

I just installed a WSL2 distribution on Windows 10 19045.3086 and discovered it has systemd supported and enabled by default. And the [other answer by @NotTheDr01ds](https://askubuntu.com/a/1436045/392634)indeed "hackily" allows you to keep WSL running after logging in and out. However, if you want your systemd services started on boot, the suggested solution to `wsl true` on boot via a scheduled task won't work: it gets the services started, but the wsl distro terminates in a short while. Looks like starting a service via the "default Linux shell" (which happens when you run `wsl true`) doesn't work, and you need the "login shell". Not sure why, but perhaps the default one bypasses the init of the login shell, or daemons started this way aren't considered "interactive". Anyway, the solution is to use the login shell command on boot, e.g.:

```dockerfile
wsl --shell-type login true

```

or

```dockerfile
wsl -d Ubuntu-22.04 --shell-type login true

```

 answered Jul 5, 2023 at 9:09 

##  You must [log in](https://superuser.com/users/login?ssrc=question%5Fpage&returnurl=https%3a%2f%2fsuperuser.com%2fquestions%2f1343558) to answer this question.

## 

Not the answer you're looking for? Browse other questions tagged 

. 

---

