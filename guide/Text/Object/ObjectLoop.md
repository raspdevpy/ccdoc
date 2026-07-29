# $ObjectLoop

To loop over an object
::: warning Warning
Only zero-cooldown functions are allowed in the CODE section! Functions that have a cooldown will be skipped, even in Tier 3+.
<br/>For example, if your loop contains `$sendMessage[Hello world!]`, it will literally display as "$sendMessage[Hello world!]" because `$sendMessage` is not a zero-cooldown function.

If you are looking to loop over non-zero cooldown functions, you should use `$forEach` instead.
::: 
## Usage

```bash
$ObjectLoop[key name;value name;index name;Nested Prroperty 1;Nested Property 2;...]{
CODE...
}
```
## Loop Limits
Array loops are limited to a certain number of cycles. These limits vary between different tiers of premium.
| Tier         | Limit |
| :-------     | :---  |
| 0 (Free)     | 50    |
| 3 (Freemium) | 50    |
| 4 (Pro)      | 100   |
| 5 (Ultra)    | 150   |

### Example:
<discord-messages>
          <discord-message :bot="false" role-color="#ffcc9a" author="Member">
        !!exec $objectSet[Mido;Sword]<br>$objectSet[Rake;Staff]<br>$objectLoop[name;weapon;index]{<br>$index. $name has $weapon<br>}<br><br>
          </discord-message>
          <discord-message :bot="true" role-color="#0099ff" author="Custom Command" avatar="https://media.discordapp.net/avatars/725721249652670555/781224f90c3b841ba5b40678e032f74a.webp">
        1. Mido has Sword<br>2. Rake has Staff
        </discord-message>
</discord-messages>
