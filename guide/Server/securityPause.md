# $securityPause

a beta feature, where discord allow you to pause invites and DMs for a period of time

## Usage

```bash
$securityPause[Duration of Pause (i.e 2h);Pause Invite (Yes/No);Pause DM (Yes/No)]
```

### Example (Pause invites for 24 hours):
```bash
$securityPause[24h;yes;no]
```

### Example (Pause DMs for 3 days):
```bash
$securityPause[3d;no;yes]
```

### Example (Pause invites and DMs for 24 hours):
```bash
$securityPause[24h;yes;yes]
```