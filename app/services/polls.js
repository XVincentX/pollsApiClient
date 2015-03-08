import "restangular"

export class pollsService {

    constructor(Restangular) {
        this.restangular = Restangular;
        this.restangular.setBaseUrl("https://polls.apiblueprint.org/");
    }

    getAllQuestions() {
        return this.restangular.all("questions").getList();
    }

    getQuestion(questionId, pageNumber = 1) {
        return this.restangular.one("questions", questionId, {
            page: pageNumber
        });
    }

    voteQuestion(questionId, choiceId) {
        return this.restangular.one("questions", questionId).one("choices ", choiceId).post({});
    }

    createQuestion(questionData) {
        return this.restangular.all("questions").post(questionData);
    }
};
