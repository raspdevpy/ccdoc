# $initVar
Initializes a variable value to a default, specified in "Defaultvalue"

#### Usage: `$initVar[server/message/channel/user;varname;Defaultvalue;id(optional)]`
<br/>
<discord-messages>
    <discord-message :bot="false" role-color="#ffcc9a" author="Member">
        !!exec $$initVar[user;warnings;0;$authorID]
    </discord-message>
</discord-messages>
