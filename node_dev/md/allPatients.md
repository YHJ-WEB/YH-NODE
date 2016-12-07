"title": "获取所有患者",
"url": "/api/nurses/{nurseId}/patients",
"method": "GET",
"params": {

},
"testCase": [
  {
    "name": "default",
    "params": {

    },
    "response": {
        "user": [
            {
              "title": "m",
              "member": [
                {
                  "userId": 1,
                  "name": "马赛",
                  "status": 0,
                  "statusName": "未入院",
                  "avatarUrl": "",
                  "identiier": "sample identity",
                  "signature": "sample signature",
                  "patientRecord": {
                    "admissionAt": "TODO",
                    "dischargeAt": "TODO",
                    "room": "TODO",
                    "bed": "TODO"
                  },
                  "tag": [
                    {
                      "tagId": 40,
                      "tagName": "a tag",
                      "tagType": 1,
                      "tagCategoryId": 34,
                      "tagCategoryName": "tag category"
                    }
                  ]
                }
              ]
            },
            {
              "title": "n",
              "member": [
                {
                  "userId": 7,
                  "name": "new user name",
                  "status": 0,
                  "statusName": "未入院",
                  "avatarUrl": "",
                  "identifier": "sample identity",
                  "signature": "sample signature",
                  "patientRecord": {
                    "admissionAt": "TODO",
                    "dischargeAt": "TODO",
                    "room": "TODO",
                    "bed": "TODO"
                  },
                  "tag": [
                    {
                      "tagId": 41,
                      "tagName": "a tag",
                      "tagType": 1,
                      "tagCategoryId": 35,
                      "tagCategoryName": "tag category"
                    }
                  ]
                }
              ]
            }
          ],
          "result": {
            "success": true
          }
    }
  }
]