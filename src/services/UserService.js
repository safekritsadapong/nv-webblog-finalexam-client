import Api from '@/services/Api'
export default {
    index(search) {
        return Api().get('speaker')
    },
    show(speakerId) {
        return Api().get('speaker/' + speakerId)
    },
    post(speaker) {
        return Api().post('speaker', speaker)
    },
    put(speaker) {
        return Api().put('speaker/' + speaker.id, speaker)
    },
    delete(speaker) {
        return Api().delete('speaker/' + speaker.id, speaker)
    },
}