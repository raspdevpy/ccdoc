# $securityPause

a beta feature, where discord allow you to pause invites and DMs for a period of time

## Usage

```bash
$securityPause[Duration of Pause (i.e 2h);Pause Invite (Yes/No);Pause DM (Yes/No)]
```

### Duration of Pause:
The value determines how much time a pause should be applied, maximum allowed duration is `24h`

### Example (Pause invites for 24 hours):
```bash
$securityPause[24h;yes;no]
```

### Example (Pause DMs for 12 hours):
```bash
$securityPause[12h;no;yes]
```

### Example (Pause invites and DMs for 24 hours):
```bash
$securityPause[24h;yes;yes]
```