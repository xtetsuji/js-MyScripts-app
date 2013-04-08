# -*- makefile -*-
# 2013/04/09
#
# TODO: Check this Makefile is used without "Mac OS X" environment.

HTTP_GET	:= $(shell for CMD in curl wget fetch ; do if type $$CMD >/dev/null 2>&1 ; then echo $$CMD ; break ; fi ; done )
OPTS	= $(shell if [ -z $(HTTP_GET) ] ; then echo "" ; elif [ $(HTTP_GET) = curl ] ; then echo "-kL" ; elif [ $(HTTP_GET) = wget ] ; then echo "--no-check-certificate -O -" ; elif [ $(HTTP_GET) = fetch ] ; then echo "-o-" ; fi )

DEPLOY_DIR	= $(HOME)/Dropbox/dev/MyScripts
JQUERY_VERSION	= 1.9.1

usage:
	@echo "Usage:"
	@echo "  make deploy DEPLOY_DIR=/path/to/dropbox/dir/"
	@echo ""
	@echo "  === get external libraries ==="
	@echo "  make external-jss"
	@echo "    make oauth.js"
	@echo "    make sha1.js"
	@echo "    make jquery.min.js JQUERY_VERSION=$(JQUERY_VERSION)"
	@echo "  make clean"
	@echo ""
	@echo "target \"deploy\"'s current: DEPLOY_DIR=$(DEPLOY_DIR)"

deploy:
	find . -type f -name \*.js -exec cp '{}' $(DEPLOY_DIR)/ ';'

http-get-exist: 
	@test -n "$(HTTP_GET)" || { echo 'require "curl" or "wget" or "fetch" for HTTP GET' ; exit 1 ; }

# see: http://pana4405.u-shizuoka-ken.ac.jp/archives/631
oauth.js: http-get-exist
	$(HTTP_GET) $(OPTS) https://oauth.googlecode.com/svn/code/javascript/oauth.js > $@

sha1.js:
	$(HTTP_GET) $(OPTS) https://oauth.googlecode.com/svn/code/javascript/sha1.js > $@

jquery.min.js:
	@test -n "$(JQUERY_VERSION)" || { echo -n "\"make $@\" is need JQUERY_VERSION.\nsee https://developers.google.com/speed/libraries/devguide?hl=ja#jquery" ; exit 1 ; }
	$(HTTP_GET) $(OPTS) http://ajax.googleapis.com/ajax/libs/jquery/$(JQUERY_VERSION)/jquery.min.js > $@

external-jss:
	$(MAKE) oauth.js sha1.js jquery.min.js

clean:
	-rm -f oauth.js sha1.js jquery.min.js
