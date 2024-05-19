# Poll Curl Format
You can use {poll:data} to send a message with a poll

### Usage
```
{poll:
	{question=poll question}
	{duration=poll duration in hours like 24h}
	{multiple=can user select multiple answers? (yes/no)}
	
	{answer=Add an anwer}
	{emoji=Add an emoji to the previous answer}
	
	{answer=Add an anwer}
	{emoji=Add an emoji to the previous answer}
	...
}
```

### Example
```
$sendMessage[
{poll:
{question=What is the biggest country in the world?}
{answer=China}
{emoji=🇨🇳} 
{answer=Russia}
{emoji=🇷🇺}

{duration=1h}
{multiple=no}
}
]
```

### Output
![](https://i.imgur.com/4BRQVag.png)