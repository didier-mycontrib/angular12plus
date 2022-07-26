npm link as a lot of limitations/bugs .
real publishing in https://www.npmjs.com/ need to change version of published package (ex 0.0.1 --> 0.0.2)
in early-developpment stage , we need a simple/light npm local repository manager in order
to test localy-published packages without changing of package version.
-----------------
verdaccio is simple/light npm local repository manager/proxy
----------------
npm i -g verdaccio
----------------
C:\Users\d2fde\AppData\Roaming\verdaccio\config.yaml : config file after first launch
http://localhost:4873/ : default verdaccio url
----------
verdaccio
Ctrl-C
--------
npm set registry http://localhost:4873/ (replace default "npm set registry https://registry.npmjs.org" )
-------
npm adduser --registry http://localhost:4873
npm login (ex: user1 or didier-defrance )
password (ex: pwd1 or .2.n...9)
email (ex: user1@worldcompany.com or didier@d-defrance.fr)
------
npm whoami
npm publish

----------------
NB: si derniere version publiee sur https://registry.npmjs.org 
est 0.0.n alors en phase de dev (sur local-verdaccio ) : 0.0.N+1
----------------

npm set registry https://registry.npmjs.org

//npm version patch //for incrementing version 0.0.n 0.0.n+1