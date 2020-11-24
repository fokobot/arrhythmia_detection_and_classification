<template>
  <div class="home">
    <div class="grid md:grid-cols-1">
      <div
        class="bg-gradient-to-r from-primary-100 via-primary-200 to-primary-300 col-span-1 grid md:grid-cols-2"
      >
        <div class="col-span-2">
          <img
            src="@/assets/images/uninorte-logo.png"
            class="w-40 block ml-32 mt-4"
            alt="Logo Uninorte"
          />
        </div>
        <div class="col-span-1 text-center my-12">
          <h1 class="text-secondary text-5xl">
            Arrythmia classification using stacked models
          </h1>
          <h3 class="text-secondary text-2xl ml-12 my-12">
            Luis Cárcamo, Alfonso Mancilla, Fabián Osorio y Johnny Villegas
          </h3>
          <div
            @click="$router.push('/model')"
            class="btn m-4 inline-block cursor-pointer rounded-full px-4 py-2 border bg-primary-100 shadow-lg border-primary-100 text-secondary transform hover:scale-110 hover:border-secondary hover:bg-white hover:shadow-none transition ease-out duration-300"
          >
            Go to results &#8594;
          </div>
        </div>
      </div>
      <div class="bg-tertiary col-span-1 grid md:grid-cols-2">
        <div class="col-span-1 text-left m-12">
          <h2 class="text-secondary text-2xl font-medium">Methods</h2>
          <p class="text-secondary text-base font-normal mt-4">
            In this work we propose performing a segmentation of each of the
            records in the dataset and applying to each of those noise reduction
            filters. For each of the cleaned segments, we perform the feature
            extraction by applying the wavelet transform (WT) and by obtaining
            RR intervals and some properties related to the form of the beats.
            For those features, we delete all of the quasi-constant features,
            i.e.: features with low variance, also, we remove highly correlated
            features. After performing this feature selection, we proceed to
            train our model and perform our model evaluation. For this, we first
            fit a multilayer perceptron model to classify normal (N) versus
            non-normal classes (F, S, V), and for those not classified initially
            as normal a linear discriminant analysis is applied to classify
            those.
          </p>
          <a
            href="https://www.overleaf.com/read/ymvqwqjzjvxd"
            target="_blank"
            class="btn m-4 inline-block rounded-full px-4 py-2 border border-secondary bg-tertiary text-secondary hover:shadow-inner transform hover:scale-110 hover:bg-primary-200 hover:border-primary-100 transition ease-out duration-300"
          >
            Read Our Paper
          </a>
        </div>
        <div class="col-span-1 text-center m-4 md:m-12">
          <img
            src="@/assets/images/cardiogram-example.jpg"
            class="h-72 block object-contain"
            alt="Electrocardiograma de ejemplo"
          />
        </div>
      </div>
      <div class="bg-white col-span-1 grid md:grid-cols-2">
        <div class="col-span-1 text-center m-4 md:m-12">
          <img
            src="@/assets/images/table1.png"
            class="h-64 object-contain"
            alt="Electrocardiograma de ejemplo"
          />
          <img
            src="@/assets/images/table2.png"
            class="h-64 object-contain"
            alt="Electrocardiograma de ejemplo"
          />
        </div>
        <div class="col-span-1 text-left m-12">
          <h2 class="text-secondary text-2xl font-medium">ECG Dataset</h2>
          <p class="text-secondary text-base font-normal my-4">
            In this work we use the MIT-BIH arryhtmia dataset [Moody andMark
            2001]. This dataset consists of 48 ECG recordings obtained from 47
            subjects, each of those corresponds to half-hour excerpts of
            two-channel 24-hour recordings. One of the two channels is the
            modified limb II (MLII) and the other one changes from subject to
            subject, so that it's either V1, V2, V4 or V5. This data was
            recorded and digitized at a sampling rate of 360 Hz. All of the
            records are annotated, so that each of the beats in the dataset has
            an assigned label from each of the classes available in the dataset.
            We only use the modified limb ii (MLII) and each record is
            segmented, with each segment of 300 samples, which is approximately
            0.83 seconds. Each segment has it's peak in the middle, so there are
            150 samples to each side of the peak. Similary to other works [Chen
            et al.2017] we divide the recordsfrom the dataset between training
            record and testing records. This division is shown in Table 1. Each
            of those records is annotated. These annotations correspondto one of
            the 16 MIT-BIH classes. In this work, we will use the AAMIclasses,
            also used in other works [Chen et al.2017; Krasteva andJekova 2007;
            Lin and Yang 2014; Yang et al.2018; Ye et al.2012; Zhuet al.2019].
            The correspondence between the AAMI classes and theMIT-BIH classes
            is shown in Table 2.
          </p>
          <!-- <img
            src="@/assets/images/table1.png"
            class="h-64 object-contain"
            alt="Electrocardiograma de ejemplo"
          /> -->
        </div>
      </div>
      <div class="bg-tertiary col-span-1 grid md:grid-cols-2">
        <div class="col-span-1 text-left m-12">
          <h2 class="text-secondary text-2xl font-medium">Preprocessing</h2>
          <p class="text-secondary text-base font-normal mt-4">
            In the figure class-S is a sample of class after the noise reduction
            process are shown.
          </p>
        </div>
        <div class="col-span-1 text-center m-4 md:m-12">
          <img
            src="@/assets/images/clase-S.png"
            class="object-contain h-52"
            alt="Electrocardiograma de ejemplo"
          />
        </div>
        <div class="col-span-1 text-center m-4 md:m-12">
          <img
            src="@/assets/images/clase-F.png"
            class="object-contain h-52"
            alt="Electrocardiograma de ejemplo"
          />
        </div>
        <div class="col-span-1 text-center m-4 md:m-12">
          <img
            src="@/assets/images/clase-N.png"
            class="object-contain h-52"
            alt="Electrocardiograma de ejemplo"
          />
        </div>
        <div class="col-span-1 text-center m-4 md:m-12">
          <img
            src="@/assets/images/clase-V.png"
            class="object-contain h-52"
            alt="Electrocardiograma de ejemplo"
          />
        </div>
        <div class="col-span-1 text-center m-4 md:m-12">
          <img
            src="@/assets/images/correlation.png"
            class="object-contain h-52"
            alt="Electrocardiograma de ejemplo"
          />
        </div>
        <!-- <div class="col-span-1 text-left m-12">
          <h2 class="text-secondary text-2xl font-medium"></h2>
          <p class="text-secondary text-base font-normal mt-4"></p>
        </div> -->
        <div class="col-span-1 text-left m-12">
          <h2 class="text-secondary text-2xl font-medium">
            Feature extraction
          </h2>
          <p class="text-secondary text-base font-normal mt-4">
            Feature selection: After obtaining all of the features from the
            Wavelet Transform, pre-rr, post-rr and kurtosis and skewness, a
            feature selection process is performed. Aiming to select the main
            variables from the initial 142 variables. First, quasi-constant
            variables are removed. All variables with a variance less than a
            defined variance thresold are removed. The variance thresold used
            was $\sigma_{min}=0.001$. After this process, we delete highly
            correlated columns, again, by using a thresold. The thresold in this
            case is $max_{corr}=0.8$. This process leaves only 39 columns. In
            Fig. correlation the correlation matrix for the remaning columns is
            shown.
          </p>
        </div>
        <div class="col-span-1 text-center m-4 md:m-12">
          <img
            src="@/assets/images/confusion.png"
            class="object-contain h-52"
            alt="Electrocardiograma de ejemplo"
          />
        </div>
      </div>
      <div class="bg-white col-span-1 grid md:grid-cols-2">
        <div class="col-span-1 text-left m-12">
          <h2 class="text-secondary text-2xl font-medium">
            Linear Discriminant Analysis
          </h2>
          <p class="text-secondary text-base font-normal my-4">
            Linear discriminant analysis (LDA) is both a linear classification
            method and a dimension reduction method. This method aims to
            maximize the separation between classes.
          </p>
          <a
            href="https://www.overleaf.com/read/ymvqwqjzjvxd"
            target="_blank"
            class="btn m-4 inline-block rounded-full px-4 py-2 border border-secondary bg-white text-secondary hover:shadow-inner transform hover:scale-110 hover:bg-primary-200 hover:border-primary-100 transition ease-out duration-300"
          >
            Read Our Paper
          </a>
        </div>
      </div>
      <div class="bg-primary-100 col-span-1">
        <div class="m-12 text-secondary">
          <h2 class="text-2xl font-medium mb-2">
            If you have questions about our work, contact us at:
          </h2>
          <span class="bg-tertiary p-1 rounded">mlcarcamo@uninorte.edu.co</span
          >,
          <span class="bg-tertiary p-1 rounded">fabiani@uninorte.edu.co</span>
          and
          <span class="bg-tertiary p-1 rounded"
            >jvillegasd@uninorte.edu.co</span
          >
        </div>
      </div>
      <div class="bg-secondary text-center col-span-1 py-10">
        <img
          src="@/assets/images/uninorte-logo.png"
          class="h-24 m-auto"
          alt="Logo Uninorte"
        />
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  components: {
    // HelloWorld
  },
  data: function () {
    return {
      classManager: 'hidden',
    }
  },
  methods: {
    addClass() {
      if (this.classManager === '') {
        this.classManager = 'hidden';
      } else {
        this.classManager = '';
      }
    }
  },
}
</script>