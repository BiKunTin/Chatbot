
mmand": "check",
        "description": "What the bot says when someone call "check" ",
        "modified": "2018-10-07T01:27:18.164Z",
        "__v": 0,
        "created": "2018-10-07T00:08:49.442Z",
        "script": [
            {
                "script": [
                    {
                        "text": [
                            "Hello! I am a bot created with Botkit Studio, here to assist you in any way I can."
                        ]
                    },
                    {
                        "action": "complete"
                    }
                ],
                "topic": "default"
            },
            {
                "script": [
                    {
                        "text": [
                            "Looks like you got distracted. We can continue later."
                        ]
                    },
                    {
                        "action": "timeout"
                    }
                ],
                "topic": "timeout"
            }
        ],
        "variables": [
            {
                "type": "string",
                "name": "question_1"
            },
            {
                "type": "string",
                "name": "question_2"
            },
            {
                "type": "string",
                "name": "question_3"
            }
        ],
        "triggers": [
            {
                "pattern": "identify",
                "type": "string"
            },
            {
                "pattern": "are you a person",
                "type": "string"
            },
            {
                "pattern": "are you a robot",
                "type": "string"
            },
            {
                "pattern": "what are you",
                "type": "string"
            },
            {
                "pattern": "who are you",
                "type": "string"
            },
            {
                "pattern": "identify yourself",
                "type": "string"
            }
        ],
        "tags": []
    }
]
