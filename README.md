# chrom-extention-date
## d-day를 계산해주는 크롬 익스텐션

- 특정일로부터 현재 일수를 자동으로 저장해 알려주는 크롬 익스텐션입니다.

### [추가]
- 특정일로부터 자동으로 현재 며칠째인지 계산을 해줍니다.
- 이모지를 Picker로 추가할 수 있는 기능을 추가했습니다.


### [개발중인 기능]
- 이름과 문구를 기입하면 익스텐션에 반영하는 기능
- 배경색과, 숫자가 적힌 박스의 색을 변경할 수 있는 기능



![image](https://user-images.githubusercontent.com/40741363/133264175-6b67867b-18b9-40e3-ad65-1c06fbbfa150.png)
![image](https://user-images.githubusercontent.com/40741363/166628253-4e031bb3-78f7-4f58-afe2-c9b2fbabaf36.png)
![image](https://user-images.githubusercontent.com/40741363/166628272-efa312b3-9a83-481d-aa05-63d72de8b5a5.png)
![image](https://user-images.githubusercontent.com/40741363/166628287-632febbd-4127-4e81-8b95-54478224b4e2.png)







[사용한 Emoji picker]

# FG Emoji Picker - Emoji picker created with vanilla javascript
This is the simplest to use emoji picker built with vanilla javascript.

![](./screenshot.png "Vanilla Javascript Emoji Picker")

## Benefits:

- It is only one .js file without css or other files
- There is no jQuery or other libraries
- Simplicity of usage
- Multiple textareas and triggers
- Draggable emoji picker container

## Initialize

Initialze plugin with ```new EmojiPicker({});```

## Options

- Trigger - must be an array of objects. Inside object there are two properties. First is selector, and second - **insertInto** method to define where emoji going to be inserted. If there are multiple 'textarea's - you can provide array of selectors as well. Watch example below.
- Close button - **closeButton** method can be true of false depending on whether you want close button on emoji picker or not.
- specialButtons - takes color code to change special (move and close) button colors.

```
new EmojiPicker({
    trigger: [
        {
            selector: '.first-btn',
            insertInto: ['.one', '.two'] // If there is only one '.selector', than it can be used without array
        },
        {
            selector: '.second-btn',
            insertInto: '.two'
        }
    ],
    closeButton: true,
    specialButtons: 'green' // #008000, rgba(0, 128, 0);
});
```
