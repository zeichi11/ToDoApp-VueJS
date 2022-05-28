const document_sample = {
  id: 'user_board:uuid',
  userId: 'zeichi',
  title: 'Board Title',
  createdAt: 'date format', // date format 결정
  todoDoc: [
    {
      id: 'user_todo:uuid',
      createdAt: 'date format', // date format 결정
      editedAt: 'date format', // date format 결정
      todoList: [
        {
          id: 'user_list:uuid',
          title: 'todo list title-1',
          createdAt: 'date format', // date format 결정
          editedAt: 'date format', // date format 결정
          items: [
            {
              id: 'user_item:uuid',
              title: 'todo item title-1',
              createdAt: 'date format',
              editedAt: 'date format',
              content: {
                tx: {
                  bodyPr: {},
                  ps: [
                    {
                      pPr: {}, // body properties
                      runs: [
                        // paragraph list 문단 정보
                        {
                          r: {
                            // run list : 문단 내 텍스트 구분 단위
                            rPr: {},
                            t: 'text block1'
                          },
                          r: {
                            // run list : 문단 내 텍스트 구분 단위
                            rPr: {},
                            t: 'text block2'
                          }
                        }
                      ]
                    }
                  ]
                }
              }
            }
            // ........
          ]
        }
        // ......
      ]
    }
  ]
}

const resource_sample = {
  // .....
}
