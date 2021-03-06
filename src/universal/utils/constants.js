import ms from 'ms';
/**
 * Big stuff:
 */
export const APP_CDN_USER_ASSET_SUBDIR = '/store';
export const APP_MAX_AVATAR_FILE_SIZE = 1024 * 1024;
export const APP_NAME = 'Action';
export const APP_REDUX_KEY = `${APP_NAME}:redux`;

/**
 * Upgrade pending states, called when the server version changes.
 * Must be a string:
 *
 *    APP_UPGRADE_PENDING_FALSE: no upgrade needed
 *   APP_UPGRADE_PENDING_RELOAD: client reload needed
 *     APP_UPGRADE_PENDING_DONE: upgrade complete
 *
 * Stored in localSession by APP_UPGRADE_PENDING_KEY.
 */
export const APP_UPGRADE_PENDING_KEY = `${APP_NAME}:upgradePending`;
export const APP_UPGRADE_PENDING_FALSE = 'false';
export const APP_UPGRADE_PENDING_RELOAD = 'reload';
export const APP_UPGRADE_PENDING_DONE = 'done';
export const APP_VERSION_KEY = `${APP_NAME}:version`; // in localStorage
export const APP_WEBPACK_PUBLIC_PATH_DEFAULT = '/static/';

/* Phases */
export const LOBBY = 'lobby';
// lowercase here to match url
export const CHECKIN = 'checkin';
export const UPDATES = 'updates';
export const FIRST_CALL = 'firstcall';
export const AGENDA_ITEMS = 'agendaitems';
export const LAST_CALL = 'lastcall';
export const SUMMARY = 'summary';
export const phaseArray = [LOBBY, CHECKIN, UPDATES, FIRST_CALL, AGENDA_ITEMS, LAST_CALL, SUMMARY];

/* Columns */
export const ACTIVE = 'active';
export const STUCK = 'stuck';
export const DONE = 'done';
export const FUTURE = 'future';
export const columnArray = [FUTURE, STUCK, ACTIVE, DONE];
export const meetingColumnArray = [DONE, ACTIVE, STUCK, FUTURE];

/* Drag-n-Drop Items */
export const PROJECT = 'project';
export const AGENDA_ITEM = 'agendaItem';

/* Sorting */
export const SORT_STEP = 1;
export const DND_THROTTLE = 25;

/* Areas */
export const MEETING = 'meeting';
export const TEAM_DASH = 'teamDash';
export const USER_DASH = 'userDash';

/* NotificationRow Types */
// Sent to Billing Leaders when their trial will expire in < 2 weeks
// varList = [trialExpiresAt]
export const TRIAL_EXPIRES_SOON = 'TRIAL_EXPIRES_SOON';
// Sent to Billing Leaders when their trial has expired
// varList = [trialExpiresAt]
export const TRIAL_EXPIRED = 'TRIAL_EXPIRED';
// Sent to Billing Leaders when a reoccuring payment gets rejected
// varList = [last4, brand]
export const PAYMENT_REJECTED = 'PAYMENT_REJECTED';
// Sent to Billing Leaders when an orgMember attempts to add a non-orgMember to a team
// [inviterId, inviterName, inviteeEmail, invitedTeamId, invitedTeamName]
export const REQUEST_NEW_USER = 'REQUEST_NEW_USER';
// Sent to the orgMember that generated the new user request
// [reason, billingLeaderName, inviteeEmail]
export const DENY_NEW_USER = 'DENY_NEW_USER';
// sent to the orgMember that just got promoted, goes away if they get demoted before acknowledging it
// [orgName]
export const PROMOTE_TO_BILLING_LEADER = 'PROMOTE_TO_BILLING_LEADER';
// sent to members of team that was archived
export const TEAM_ARCHIVED = 'TEAM_ARCHIVED';

export const notificationTypes = [
  TRIAL_EXPIRES_SOON,
  TRIAL_EXPIRED,
  PAYMENT_REJECTED,
  PROMOTE_TO_BILLING_LEADER,
  REQUEST_NEW_USER,
  DENY_NEW_USER,
  TEAM_ARCHIVED
];

export const billingLeaderTypes = [
  TRIAL_EXPIRES_SOON,
  TRIAL_EXPIRED,
  PAYMENT_REJECTED,
  REQUEST_NEW_USER
];

/* User Settings */
export const SETTINGS = 'settings';
export const ORGANIZATIONS = 'organizations';
export const NOTIFICATIONS = 'notifications';
export const settingsOrder = [SETTINGS, ORGANIZATIONS, NOTIFICATIONS];

/* Org Settings */
export const BILLING_PAGE = 'billing';
export const MEMBERS_PAGE = 'members';

/* User Org Roles */
export const BILLING_LEADER = 'billingLeader';

/* Stripe */
// changing this does NOT change it in stripe, it just changes the UI
export const MONTHLY_PRICE = 5;
export const ADDED_USERS = 'ADDED_USERS';
export const REMOVED_USERS = 'REMOVED_USERS';
export const INACTIVITY_ADJUSTMENTS = 'INACTIVITY_ADJUSTMENTS';
export const OTHER_ADJUSTMENTS = 'OTHER_ADJUSTMENTS';

/* Invoice status variables */
export const UPCOMING = 'UPCOMING';
export const PENDING = 'PENDING';
export const PAID = 'PAID';
export const FAILED = 'FAILED';

/* character limits */
export const PROJECT_MAX_CHARS = 51200;

/* Action Tags */
export const tags = [
  {
    name: 'private',
    description: 'Only you will be able to see this project'
  },
  {
    name: 'archived',
    description: 'Hidden from your main board'
  }
];

export const textTags = ['#private', '#archived'];

export const NEWLINE_REGEX = /\r\n?|\n/g;

/* Integrations */
export const DEFAULT_TTL = ms('5m');
export const GITHUB = 'GitHubIntegration';
export const SLACK = 'SlackIntegration';
export const CURRENT_PROVIDERS = [GITHUB, SLACK];
export const GITHUB_SCOPE = 'admin:org_hook,read:org,repo,user:email,write:repo_hook';
export const SLACK_SCOPE = 'identify,incoming-webhook,channels:read,chat:write:bot';
export const GITHUB_ENDPOINT = 'https://api.github.com/graphql';

/* JavaScript specifics */
export const MAX_TIMEOUT = 2147483647;
