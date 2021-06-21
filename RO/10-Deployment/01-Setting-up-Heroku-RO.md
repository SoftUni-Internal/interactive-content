# Setarea Heroku

[slide hideTitle]

# Setare: Instalarea Git

[video src="https://videos.softuni.org/hls/Javascript/Javascript-Back-End/RO/08-Deployment/interactive-js-back-end-deployment-3-4-5-6-7-8-Git-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

**Git** este **un sistem de control al versiunilor** care vă ajută **să țineți evidența modificărilor** în baza de date a codului dvs.

Primul pas către **implementarea** aplicației dvs. **NodeJS application** este asigurarea faptului că aveți Git **instalat**.

Deschideți o fereastră command\-line și tastați:

`git --version`

Dacă rezultatul arată un **număr de versiune**, sunteți **gata de plecare**.

Dacă comanda returnează **unrecognized**, continuați cu pașii următori.

## Instalarea pe Windows

Pentru a instala Git pe **Windows**, [click here](https://git-scm.com/download/win).

Alegeți Git pentru versiunea dvs. Windows (**32-bit** sau **64-bit**), și **descărcați-l**

Apoi, **deschideți fișierul de instalare** și treceți prin **procesul de configurare**.

Alternativ, puteți [instala GitHub Desktop](https://desktop.github.com/), care vine **la pachet cu Git** pe lângă faptul că vă ajută **să vă gestionați** depozitele GitHub.

## Instalarea pe MacOS

Instalarea Git pe **macOS** necesită **Homebrew**.

Pentru a instala **Homebrew**, deschideți **Terminal** și tastați:

`/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"`

Apoi, **instalați Git** utilizând următoarea comandă:

`brew install git`

De asemenea, puteți [instala GitHub Desktop](https://desktop.github.com/).

## Instalarea pe Linux

Dacă utilizați **Ubuntu** sau o altă distribuție bazată pe Debian, utilizați `apt`:

`sudo apt install git-all`

Pentru **distribuțiile bazate pe RPM**, cum ar fi **Fedora**, utilizați `dnf`:

`sudo dnf install git-all`

Dacă utilizați o **distribuție Linux diferită**, [accesați site-ul web Git](https://git-scm.com/download/linux).

[/slide]


[slide hideTitle]

# Setare: Instaalrea Heroku

**Heroku** este una dintre cele mai populare soluții **platform-as-a-service (PaaS)**.

Prin intermediul interfeței Heroku Command Line, putem **gestiona** aplicațiile noastre, **rula** local, precum și **le implementa**.

Puteți **descărca** Heroku CLI [aici](https://devcenter.heroku.com/articles/getting-started-with-nodejs#set-up).

Alegeți programul de instalare pentru sistemul dvs. de operare și urmați procesul de configurare.

Pentru a utiliza **Heroku** este necesar să aveți un **cont**.

În **CLI**, tastați `heroku login`.

Această comandă va deschide o **pagină de autentificare** în browserul dvs. implicit.

Dacă **nu aveți** un cont Heroku, faceți clic pe `Sign up`.

După **înregistrare** și **confirmarea e-mailului**, vi se va solicita să creați o **parolă**.

După finalizarea configurării, veți fi **automat** conectat la Heroku CLI.

[/slide]
