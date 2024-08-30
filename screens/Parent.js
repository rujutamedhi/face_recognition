import React, { useState } from 'react';
import { View } from 'react-native';
import SubjectClick from './SubjectClick';
import StudentSub from './StudentSub';

const ParentComponent = () => {
  const [verify, setVerify] = useState(false);

  return (
    <View style={{ flex: 1 }}>
      <SubjectClick onVerifyChange={setVerify} />
      <StudentSub verify={verify} />
    </View>
  );
};

export default ParentComponent;
