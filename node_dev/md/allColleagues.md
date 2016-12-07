"title": "所有同事",
"url": "/api/nurses/{nurseId}/colleagues",
"method": "GET",
"params": {

},
"testCase": [
    {
        "name": "default",
        "params": {

        },
        "response": {
            "nurse": [
                {
                  "tagId": 1,
                  "tagName": "fat tag",
                  "tagType": 0,
                  "member": [
                    {
                      "nurseId": 1,
                      "name": "new nurse name",
                      "avatarUrl": "",
                      "identiier": "",
                      "signature": "",
                      "occupation": {
                        "IDNumber": "2394384394839",
                        "certs": "{}",
                        "photocopy": "{}"
                      },
                      "tag": [
                        {
                          "tagId": 1,
                          "tagName": "fat tag",
                          "tagType": 0,
                          "tagCategoryId": 1,
                          "tagCategoryName": "Fat category"
                        },
                        {
                          "tagId": 2,
                          "tagName": "fat tag 2",
                          "tagType": 0,
                          "tagCategoryId": 1,
                          "tagCategoryName": "Fat category"
                        }
                      ]
                    }
                  ]
                }
              ],
              "all": [
                {
                  "nurseId": 1,
                  "name": "new nurse name",
                  "avatarUrl": "",
                  "identifier": "",
                  "signature": "",
                  "occupation": {
                    "IDNumber": "2394384394839",
                    "certs": "{}",
                    "photocopy": "{}"
                  },
                  "tag": [
                    {
                      "tagId": 1,
                      "tagName": "fat tag",
                      "tagType": 0,
                      "tagCategoryId": 1,
                      "tagCategoryName": "Fat category"
                    },
                    {
                      "tagId": 2,
                      "tagName": "fat tag 2",
                      "tagType": 0,
                      "tagCategoryId": 1,
                      "tagCategoryName": "Fat category"
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