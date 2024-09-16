# $changeNickname
changes the nickname from the member specified in the first parameter

#### Usage: 
`$changeNickname[userID;nickname]`

#### Example:
<discord-messages>
          <discord-message :bot="false" role-color="#ffcc9a" author="Cool Name">
        !!exec $changeNickname[$authorID;New Nickname]<br><br>
          </discord-message>
          <discord-message :bot="false" role-color="#0099ff" author="New Nickname">
        Test Message<br><br>
        </discord-message>
</discord-messages>

::: tip Used Functions
[$authorID](../Member/authorID.md), to get the ID from the author of the command
:::

::: tip Related Functions
[$nickname](../Member/nickname.md), to get the current nickname from a member
:::


##### Function difficulty: <Badge type="tip" text="Easy" vertical="middle" /> 
###### Tags: <Badge type="tip" text="change Nickname" vertical="middle" /> <Badge type="tip" text="nickname" vertical="middle" /> <Badge type="tip" text="server name" vertical="middle" /> <Badge type="tip" text="Names" vertical="middle" /> <Badge type="tip" text="modify name" vertical="middle" />
