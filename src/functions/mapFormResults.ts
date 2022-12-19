import formResponses from '../data/form.json';

function mapFormResults(
  type: 'goal' | 'gender' | 'frequency' | 'activity',
  value: string,
) {
  if (type === 'gender') {
    switch (value) {
      case formResponses[0].a[0]:
        return 1.1;
      case formResponses[0].a[1]:
        return 0.8;
      case formResponses[0].a[2]:
        return 1;
    }
  }

  if (type === 'goal') {
    switch (value) {
      case formResponses[1].a[0]:
        return 0.8;
      case formResponses[1].a[1]:
        return 1;
      case formResponses[1].a[2]:
        return 1.1;
    }
  }

  if (type === 'frequency') {
    switch (value) {
      case formResponses[5].a[0]:
        return 0.9;
      case formResponses[5].a[1]:
        return 1;
      case formResponses[5].a[2]:
        return 1.1;
      case formResponses[5].a[3]:
        return 1.2;
    }
  }
  if (type === 'activity') {
    switch (value) {
      case formResponses[6].a[0]:
        return 0.9;
      case formResponses[6].a[1]:
        return 1;
      case formResponses[6].a[2]:
        return 1.1;
    }
  }
}

export default mapFormResults;
