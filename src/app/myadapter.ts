import { ChatAdapter, Message, ParticipantResponse } from 'ng-chat';
import { Observable } from 'rxjs';

export class MyAdapter extends ChatAdapter {

    listFriends(): Observable<ParticipantResponse[]> {
        return new Observable((participants) => {
            return participants.next([
                {
                    participant: {
                        avatar: 'assets/avatar.png',
                        displayName: 'Usuário 1',
                        id: 2,
                        participantType: 0,
                        status: 1
                    },
                    metadata: {
                        totalUnreadMessages: 1
                    }
                },
                {
                    participant: {
                        avatar: 'assets/avatar.png',
                        displayName: 'Usuário 1',
                        id: 3,
                        participantType: 0,
                        status: 0
                    },
                    metadata: {
                        totalUnreadMessages: 3
                    }
                },
            ]);
        })
    };

    getMessageHistory(destinataryId: any): Observable<Message[]> {
        return new Observable((participants) => {
            return participants.next([
                {
                    fromId: 1,
                    message: 'Boa tarde. Como você está?',
                    toId: 2,
                    dateSent: new Date()
                },
                {
                    fromId: 2,
                    message: 'Boa tarde. Estou bem e você?',
                    toId: 1,
                    dateSent: new Date()
                }
            ]);
        })
    };

    sendMessage(message: Message): void {
        alert('Enviando mensagem: ' + message.message)
    };
}