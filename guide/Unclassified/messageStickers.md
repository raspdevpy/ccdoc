# $messageStickers

To return the user message stickers (id)\
**Index**: starts with 1, leaving it empty return all stickers ids separated by `, `

## Usage

```bash
$messageStickers[Index]
```

### Example:
$messageStickers[1] // output: 992970796031017080\
$messageStickers[10000] // output: undefined