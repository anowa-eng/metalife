from channels.genetic.websocket import JsonWebsocketConsumer

class MotionConsumer(JsonWebsocketConsumer):
    def connect(self):
        self.accept()

    def recieve_json(content):
        self.accept()

        self.send_json(content)

        self.close()