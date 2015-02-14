Meteor.startup(function() {
	Inject.rawModHtml('addUnresolved', function(html) {
		return html = html.replace('<body>', '<body unresolved fit layout vertical>');
	});
		smtp = {
			server: '192.168.197.45',
			port: 25
		}

		process.env.MAIL_URL = 'smtp://' + encodeURIComponent(smtp.server) + ':' + smtp.port;
	});