import _ from 'lodash';

class pollsListController {
  constructor(pollsService) {
    this.pollsService = pollsService;

    this.pollsService.getPolls()
      .then(this.updateLocalPollsInstance.bind(this))
      .catch(() => {
        alert('Fanculo amico');
      });
  }

  deletePoll(poll) {
    _.remove(this.polls.questions, {id: poll.id});
  }

  followLink(link) {
    this.pollsService.follow(link)
      .then(this.updateLocalPollsInstance.bind(this))
      .catch(() => {
        alert('Fanculo amico');
      });
  }

  updateLocalPollsInstance(polls) {
      this.polls = polls;
    }
}

pollsListController.$inject = ['pollsService'];
export default pollsListController;
