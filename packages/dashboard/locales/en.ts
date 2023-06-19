export default {
  'signin.title': 'Sign in',
  'signin.description': 'Please sign in into your account to access the dashboard.',
  'signin.github': 'Sign in with GitHub',
  'signin.google': 'Sign in with Google',
  'signin.error.title': 'Failed to sign in',
  'signin.error.description': 'An error ({error}) occured while trying to sign in. Please try again.',
  'signin.error.description.notAuthorized':
    'Your are not authorized to sign in. Join the waitlist to be notified when we release updates.',
  'signin.error.joinWaitlist': 'Join waitlist',

  'layout.header.functions': 'Functions',
  'layout.header.settings': 'Settings',
  'layout.header.documentation': 'Documentation',
  'layout.header.menu.newOrganization': 'New Organization',
  'layout.header.menu.settings': 'Settings',
  'layout.header.menu.theme': 'Theme',
  'layout.header.menu.theme.light': 'Light',
  'layout.header.menu.theme.dark': 'Dark',
  'layout.header.menu.theme.system': 'System',
  'layout.header.menu.profile': 'Profile',
  'layout.header.menu.language': 'Language: {locale}',
  'layout.header.menu.language.en': 'English',
  'layout.header.menu.language.fr': 'French',
  'layout.header.menu.signOut': 'Sign out',
  'layout.empty.title': 'No Organization found',
  'layout.empty.description': 'Please create an Organization to get started.',
  'layout.empty.action': 'Create Organization',

  'home.title': 'Functions',
  'home.createFunction': 'Create a Function',
  'home.empty.title': 'No Functions found',
  'home.empty.description': 'Get started by creating a Function on the Dashboard, or use the CLI to test and deploy.',
  'home.empty.action': 'Get Started guide',
  'home.list.lastUpdate': 'Last update:',

  'settings.title': 'Settings',
  'settings.general': 'General',
  'settings.members': 'Members',
  'settings.billingUsage': 'Billing & Usage',
  'settings.name.title': 'Name',
  'settings.name.description': 'Change the name of this Organization.',
  'settings.name.placeholder': 'Organization name',
  'settings.name.submit': 'Update',
  'settings.name.success': 'Organization name updated successfully.',

  'settings.description.title': 'Description',
  'settings.description.description': 'Change the description of this Organization.',
  'settings.description.placeholder': 'Organization description',
  'settings.description.submit': 'Update',
  'settings.description.success': 'Organization description updated successfully.',

  'settings.delete.title': 'Delete',
  'settings.delete.description':
    'Delete completely this Organization, its Functions, Deployments and Logs. This action is irreversible.',
  'settings.delete.submit': 'Delete',
  'settings.delete.modal.title': 'Delete Organization',
  'settings.delete.modal.description': "Write this Organization's name to confirm deletion: {organizationName}",
  'settings.delete.modal.error': 'Confirm with the name of this Organization',
  'settings.delete.modal.submit': 'Delete Organization',
  'settings.delete.success': 'Organization deleted successfully.',

  'settings.members.title': 'Members',
  'settings.members.description': 'Manage the members of this Organization.',
  'settings.members.owner': 'Owner',
  'settings.members.member': 'Member',
  'settings.members.invite': 'Invite a new member',
  'settings.members.invite.modal.title': 'Invite a new member',
  'settings.members.invite.modal.description': 'Enter the email of the member you want to invite.',
  'settings.members.invite.modal.submit': 'Invite member',
  'settings.members.invite.success': 'Member has been invited.',
  'settings.members.joined': 'Joined at:',
  'settings.members.remove': 'Remove member',
  'settings.members.remove.modal.title': 'Remove member from your Organization',
  'settings.members.remove.modal.description': 'Are you sure you want to remove {member} from {organization}?',
  'settings.members.remove.modal.submit': 'Remove member',
  'settings.members.remove.success': 'User removed from your Organization successfully.',

  'settings.transfer.title': 'Transfer',
  'settings.transfer.description': 'Transfer the ownership of this Organization to another user.',
  'settings.transfer.placeholder': 'New Owner email',
  'settings.transfer.submit': 'Transfer ownership',
  'settings.transfer.success': 'Ownership of this Organization transferred successfully.',
  'settings.transfer.notAvailable': 'Not available yet.',
  'settings.transfer.notAvailable.description':
    'Please email contact@lagon.app if you want to transfer your Organization.',

  'settings.usage.title': 'Usage',
  'settings.usage.description':
    'View the usage and limits of this Organization for the current month. Requests usage resets at the beginning of each month.',
  'settings.usage.requests': 'Total requests',
  'settings.usage.functions': 'Functions',
  'settings.usage.members': 'Organization members',

  'settings.subcription.title': 'Subscription',
  'settings.subcription.description': 'Upgrade and manage the subscription of this Organization.',
  'settings.subcription.plan.personal': 'Personal',
  'settings.subcription.plan.pro': 'Pro',
  'settings.subcription.renew': 'Renew: {date}',
  'settings.subcription.upgrade.pro': 'Upgrade to Pro',
  'settings.subcription.manage': 'Manage subscription',

  'profile.title': 'Profile',
  'profile.information.title': 'Information',
  'profile.information.description': 'Edit your account information like your name and email.',
  'profile.information.name.title': 'Name',
  'profile.information.name.placeholder': 'John Doe',
  'profile.information.email.title': 'Email',
  'profile.information.email.placeholder': 'john@doe.com',
  'profile.information.submit': 'Update',
  'profile.information.success': 'Information updated successfully.',

  'profile.tokens.title': 'Tokens',
  'profile.tokens.description':
    'Below are your personal Tokens, used for authenticating through the CLI and the GitHub Action.',
  'profile.tokens.created': 'Created:',
  'profile.tokens.copy': 'Copy',
  'profile.tokens.copy.success': 'Token copied to clipboard.',
  'profile.tokens.delete.submit': 'Delete',
  'profile.tokens.delete.modal.title': 'Delete Token',
  'profile.tokens.delete.modal.description':
    'Are you sure you want to delete this Token? You will lose access to the CLI if it is still used.',
  'profile.tokens.delete.modal.submit': 'Delete Token',
  'profile.tokens.delete.success': 'Token has been deleted.',

  'profile.delete.title': 'Delete',
  'profile.delete.description': 'Delete permanentently this account. This action is irreversible.',
  'profile.delete.submit': 'Delete',
  'profile.delete.modal.title': 'Delete Account',
  'profile.delete.modal.description': 'Write your account email to confirm deletion: {email}',
  'profile.delete.modal.confirm': 'Confirm with your email',
  'profile.delete.modal.submit': 'Delete Account',
  'profile.delete.notAvailable': 'Not available yet.',
  'profile.delete.notAvailable.description': 'Please email contact@lagon.app if you want to delete your Account.',

  'cli.title': 'Log in to the CLI',
  'cli.description': 'This is your verification code to login in the CLI. Copy it and paste it in your terminal.',
  'cli.copy': 'Click to copy',
  'cli.copy.success': 'Copied to clipboard!',

  'new.title': 'New Organization',
  'new.success': 'Organization created successfully.',
  'new.name.title': 'Name',
  'new.name.placeholder': 'awesome-project',
  'new.description.title': 'Description',
  'new.description.placeholder': 'Description of my awesome project.',
  'new.submit': 'Create Organization',

  'playground.title': '{functionName} playground',
  'playground.back': 'Back to overview',
  'playground.deploy': 'Deploy',
  'playground.deploy.success': 'Function deployed successfully.',
  'playground.deploy.error': 'Failed to deploy Function.',
  'playground.reload': 'Reload',

  'function.nav.playground': 'Playground',
  'function.nav.overview': 'Overview',
  'function.nav.deployments': 'Deployments',
  'function.nav.logs': 'Logs',
  'function.nav.settings': 'Settings',
  'function.nav.cron': 'Cron',

  'functions.overview.usage': 'Usage & Limits',
  'functions.overview.usage.requests': 'Requests',
  'functions.overview.usage.crons': 'Cron executions',
  'functions.overview.usage.avgCpu': 'Avg. CPU time',
  'functions.overview.usage.avgInBytes': 'Avg. IN bytes',
  'functions.overview.usage.avgOutBytes': 'Avg. OUT bytes',
  'functions.overview.usage.lastCron': 'Last Cron',
  'functions.overview.usage.lastCron.label': '{time} ago',
  'functions.overview.usage.nextCron': 'Next Cron',
  'functions.overview.usage.nextCron.label': 'In {time}',
  'functions.overview.usage.nextCron.label.invalid': 'Invalid',
  'functions.overview.usage.lastUpdate': 'Last update:',
  'functions.overview.usage.created': 'Created:',
  'functions.overview.requests': 'Requests',
  'functions.overview.requests.label': 'Requests',
  'functions.overview.crons': 'Cron executions',
  'functions.overview.crons.label': 'Cron executions',
  'functions.overview.cpuTime': 'CPU time',
  'functions.overview.cpuTime.label': 'CPU time',
  'functions.overview.network': 'Network',
  'functions.overview.network.label.inBytes': 'IN bytes',
  'functions.overview.network.label.outBytes': 'OUT bytes',

  'functions.deployments.empty.title': 'No Deployments found',
  'functions.deployments.empty.description': 'Create your first Deployment from the Dashboar or with the CLI.',
  'functions.deployments.empty.action': 'Deployments documentation',
  'functions.deployments.list.production': 'Production Deployment',
  'functions.deployments.list.noCommit': 'No commit linked',
  'functions.deployments.list.by': 'By:',
  'functions.deployments.promote': 'Promote to Production',
  'functions.deployments.promote.modal.title': 'Promote Deployment to Production',
  'functions.deployments.promote.modal.description': 'Are you sure you want to promote this Deployment to Production?',
  'functions.deployments.promote.modal.submit': 'Promote to Production',
  'functions.deployments.promote.success': 'Deployment promoted to Production successfully.',
  'functions.deployments.delete': 'Delete',
  'functions.deployments.delete.modal.title': 'Delete Deployment',
  'functions.deployments.delete.modal.description': 'Are you sure you want to delete this Deployment?',
  'functions.deployments.delete.modal.submit': 'Delete',
  'functions.deployments.delete.success': 'Deployment deleted successfully.',

  'functions.logs.title': 'Live Logs & Errors',
  'functions.logs.logLevel': 'Log level:',
  'functions.logs.empty.title': 'No logs found',
  'functions.logs.empty.description': 'Adjust the filters or add some logs by reading the documentation.',
  'functions.logs.empty.action': 'Logs documentation',

  'functions.settings.name.title': 'Name',
  'functions.settings.name.description':
    'Change the name of this Function. Note that changing the name also changes the default domain.',
  'functions.settings.name.placeholder': 'my-awesome-function',
  'functions.settings.name.submit': 'Update',
  'functions.settings.name.success': 'Function name updated successfully.',
  'functions.settings.domains.title': 'Domains',
  'functions.settings.domains.description':
    "The default domain is based on this Function's name. You can also add custom domains.",
  'functions.settings.domains.doc': 'Learn more about Domains',
  'functions.settings.domains.add': 'Add domain',
  'functions.settings.domains.add.modal.title': 'Add a new domain',
  'functions.settings.domains.add.modal.description':
    'Add a new domain to this Function. Make sure to update your DNS record as described below:',
  'functions.settings.domains.add.modal.cname': 'Add a CNAME record pointing to {domain}',
  'functions.settings.domains.add.modal.doc': 'Learn more in the documentation',
  'functions.settings.domains.add.modal.submit': 'Add domain',
  'functions.settings.domains.add.success': 'Domain added successfully.',
  'functions.settings.domains.list.default': 'Default domain',
  'functions.settings.domains.list.valid': 'Domain is valid',
  'functions.settings.domains.list.valid.cf': 'Domain proxied through Cloudflare',
  'functions.settings.domains.list.invalid': 'Domain is pointing to {domain} instead of {target}',
  'functions.settings.domains.list.invalid.none': 'Add a CNAME record pointing to {target}',
  'functions.settings.domains.list.delete': 'Delete',
  'functions.settings.domains.list.delete.success': 'Domain deleted successfully.',
  'functions.settings.cron.title': 'Cron',
  'functions.settings.cron.description':
    'Run this Function automatically at a scheduled rate using a Cron expression. You can also choose in which Region to run the Function.',
  'functions.settings.cron.doc': 'Learn more about Cron expressions',
  'functions.settings.cron.expression': 'Expression',
  'functions.settings.cron.expression.placeholder': '* */12 * * *',
  'functions.settings.cron.region': 'Region',
  'functions.settings.cron.submit': 'Update',
  'functions.settings.cron.success': 'Function Cron updated successfully.',
  'functions.settings.env.title': 'Environment variables',
  'functions.settings.env.description': 'Environment variables are injected into your Function at runtime.',
  'functions.settings.env.doc': 'Learn more about Environment variables',
  'functions.settings.env.placeholder.key': 'e.g MY_KEY',
  'functions.settings.env.placeholder.value': 'e.g value',
  'functions.settings.env.add': 'Add',
  'functions.settings.env.remove': 'Remove',
  'functions.settings.env.submit': 'Submit',
  'functions.settings.env.success': 'Function environment variables updated successfully.',
  'functions.settings.delete.title': 'Delete',
  'functions.settings.delete.description':
    'Delete completely this Function, its Deployments and Logs. This action is irreversible.',
  'functions.settings.delete.submit': 'Delete',
  'functions.settings.delete.modal.title': 'Delete Function',
  'functions.settings.delete.modal.description': "Write this Function's name to confirm deletion: {functionName}",
  'functions.settings.delete.modal.confirm': 'Confirm with the name of this Function',
  'functions.settings.delete.modal.submit': 'Delete Function',
  'functions.settings.delete.success': 'Function deleted successfully.',
} as const;
