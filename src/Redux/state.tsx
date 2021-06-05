const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST = "UPDATE-NEW-POST"
const ADD_MESSAGE = "ADD-MESSAGE"
const UPDATE_NEW_MESSAGE = "UPDATE-NEW-MESSAGE"

export type MessageType = {
    id: number
    message: string
}

export type DialogType = {
    id: number
    name: string
}

export type PostType = {
    id: number
    message: string
    likesCount: number
}

export type ProfilePageType = {
    posts: Array<PostType>
    newPostText: string
}

export type DialogPageType = {
    dialogsData: Array<DialogType>
    messages: Array<MessageType>
    newMessage: string
}

export type SidebarType = {
    id: number
    link: string
    name: string
}

export type FriendsPageType = {
    friends: Array<SidebarType>
}

export type RootStateType = {
    profilePage: ProfilePageType
    messagesPage: DialogPageType
    sidebar: FriendsPageType
}

export type StoreType = {
    _callSubscriber: () => void
    subscribe: (observer: () => void) => void
    getState: () => RootStateType
    _state: RootStateType
    // updateNewMessage: (newText: string) => void
    // addPost: (postMessage: string) => void
    // updateNewPostText: (newText: string) => void
    // addMessage: (message: string) => void
    dispatch: (action: ActionsType) => void
}

export type ActionsType = addPostType | updatePostType | addMessageType | updateMessageType;

type addPostType = {
    type: 'ADD-POST'
    postMessage: string
}

type updatePostType = {
    type: 'UPDATE-NEW-POST'
    newText: string
}
type addMessageType = {
    type: 'ADD-MESSAGE'
    message: string
}
type updateMessageType = {
    type: 'UPDATE-NEW-MESSAGE'
    newText: string
}

export const addPostActionCreate = (postText: string): addPostType => ({
        type: ADD_POST,
        postMessage: postText
})

export const updateNewPostActionCreator = (newText: string): updatePostType => ({
        type: UPDATE_NEW_POST,
        newText: newText
})

export const addMessageActionCreator = (newText: string): addMessageType => ({
        type: ADD_MESSAGE,
        message: newText
})

export const updateNewMessageActionCreator = (newText: string): updateMessageType => ({
        type: UPDATE_NEW_MESSAGE,
        newText: newText
})

const store: StoreType = {

    _callSubscriber() {
    },

    subscribe(observer) {
        this._callSubscriber = observer
    },

    getState() {
        return this._state
    },

    _state: {
        profilePage: {
            posts: [
                {id: 1, message: "what's up, man", likesCount: 3},
                {id: 2, message: "how are you", likesCount: 7}
            ],
            newPostText: ''
        },
        messagesPage: {
            dialogsData: [
                {id: 1, name: 'sveta'},
                {id: 2, name: 'sasha'},
                {id: 3, name: 'anton'},
                {id: 4, name: 'yura'},
            ],
            messages: [
                {id: 1, message: 'hi'},
                {id: 2, message: 'yo'},
                {id: 3, message: 'no'},
                {id: 4, message: 'ahahaha'},
            ],
            newMessage: ''
        },
        sidebar: {
            friends: [
                {
                    id: 1,
                    link: "https://i.pinimg.com/originals/e6/8b/6d/e68b6d3fded9bb2ac253ab56ffc947c6.jpg",
                    name: 'jon'
                },
                {
                    id: 2,
                    link: "https://i1.wp.com/sova.ponominalu.ru/wp-content/uploads/2019/08/ava-max.jpg?fit=2000%2C1333&ssl=1",
                    name: 'britt'
                },
                {
                    id: 3,
                    link: "https://i.pinimg.com/originals/96/a5/7e/96a57ecd9d21aade708337ca2c2c6989.jpg",
                    name: 'nick'
                }
            ]
        }
    },

    dispatch(action) {
        if (action.type === ADD_POST) {
            const newPost: PostType = {
                id: 3,
                message: action.postMessage,
                likesCount: 0
            }
            this._state.profilePage.posts.push(newPost)
            this._state.profilePage.newPostText = ''
            this._callSubscriber()
        } else if (action.type === UPDATE_NEW_POST) {
            this._state.profilePage.newPostText = action.newText
            this._callSubscriber()
        } else if (action.type === ADD_MESSAGE) {
            const newMessage: MessageType = {
                id: 5,
                message: action.message
            }
            this._state.messagesPage.messages.push(newMessage)
            this._state.messagesPage.newMessage = ''
            this._callSubscriber()
        } else if (action.type === UPDATE_NEW_MESSAGE) {
            this._state.messagesPage.newMessage = action.newText
            this._callSubscriber()
        }
    },

}

export default store